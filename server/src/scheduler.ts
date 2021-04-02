import { Job, scheduleJob } from "node-schedule";
import EventEmitter from "events";
import { Stores } from "./stores";
import { cacheProducts, redis } from "./redis";
import { Store } from "./types";
import { IS_DEV } from "./constants";

const stores = Object.entries(Stores);

export class Scheduler extends EventEmitter {
  private readonly schedule: Job;

  constructor() {
    super();

    this.loop = this.loop.bind(this);

    this.schedule = scheduleJob(`*/${IS_DEV ? 5 : 1} * * * * *`, this.loop);
  }

  stop() {
    this.schedule.cancel();
  }

  async loop() {
    const now = Date.now();

    stores.forEach(async ([store, storeConfig]) => {
      if (!storeConfig) return;

      this.emit("message", `Fetching all products for ${store}`);

      const lastCache = await redis.get(`last:cache:${store}`);

      if (lastCache === null || parseInt(lastCache) + storeConfig.interval <= now) {
        const products = await storeConfig.fetchAllProducts();
        const oldProducts = Object.values(await redis.hgetall(`store:${store}`)).map((p) => JSON.parse(p));

        await cacheProducts(store as Store, ...products);
        const diff = await storeConfig.calculateDiff(oldProducts, products);

        // No new products
        if (diff.length === 0) return;

        for (const product of diff) {
          this.emit("restock", store, product);
        }
      }
    });
  }
}
