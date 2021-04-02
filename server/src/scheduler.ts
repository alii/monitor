import { Job, scheduleJob } from "node-schedule";
import EventEmitter from "events";
import { Stores } from "./stores";
import { cacheProducts, redis } from "./redis";
import { GenericProduct, Store } from "./types";
import { IS_DEV } from "./constants";

const stores = Object.entries(Stores);

export class Scheduler extends EventEmitter {
  private readonly schedule: Job;

  constructor() {
    super();

    this.loop = this.loop.bind(this);

    this.schedule = scheduleJob(`*/${IS_DEV ? 1 : 1} * * * * *`, this.loop);
  }

  stop() {
    this.schedule.cancel();
  }

  async loop() {
    const now = Date.now();

    stores.forEach(async ([store, storeConfig]) => {
      if (!storeConfig) return;

      const lastCache = await redis.get(`last:cache:${store}`);

      if (lastCache === null || parseInt(lastCache) + storeConfig.interval <= now) {
        this.emit("message", `Fetching all products for ${store}`);

        const products = await storeConfig.fetchAllProducts();
        const oldProducts = await redis.smembers(`store:${store}`).then((ps) => {
          return ps.map((p) => JSON.parse(p)) as GenericProduct[];
        });

        await cacheProducts(store as Store, ...oldProducts, ...products);

        const diff = await storeConfig.calculateDiff(oldProducts, products);

        for (const product of diff) {
          this.emit("restock", store, product);
        }
      }
    });
  }
}
