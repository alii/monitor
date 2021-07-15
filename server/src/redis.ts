import IORedis from 'ioredis';

export const redis = new IORedis(process.env.REDIS_URI, {
	lazyConnect: true,
});

/**
 * Default Redis expiry in seconds
 */
export const DEFAULT_REDIS_EXPIRY = 120;
