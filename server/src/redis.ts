import IORedis from "ioredis";
import { GenericProduct, Store } from "./types";

export const redis = new IORedis(process.env.REDIS_URI, {
  lazyConnect: true,
});

/**
 * Default Redis expiry in seconds
 */
export const DEFAULT_REDIS_EXPIRY = 120;

export async function cacheProducts(store: Store, ...products: GenericProduct[]): Promise<void> {
  for (const product of products) {
    await redis.hset(`store:${store}`, product.id, JSON.stringify(product));
  }
}
