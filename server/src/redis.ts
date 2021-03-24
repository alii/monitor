import IORedis from "ioredis";
import { GenericProduct, Store } from "./types";

export const redis = new IORedis(process.env.REDIS_URI);

export function _store<T>(key: string, data: T, expiry = -1): Promise<"OK"> {
  return redis.set(key, JSON.stringify(data), "ex", expiry);
}

export async function cacheProducts(
  store: Store,
  ...products: GenericProduct[]
): Promise<void> {
  for (const product of products) {
    await _store(`${store}:${product.id}`, product);
  }
}
