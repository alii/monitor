import {Controller, Get} from '@overnightjs/core';
import {Request, Response} from 'express';
import {redis} from '../redis';

import * as z from 'zod';
import {GenericProduct, Store} from '../../../shared/types';

const stores = Object.values(Store) as string[];

const storeSchema = z.string().refine(s => stores.includes(s));

@Controller('products')
export class Products {
	/**
	 * Get a list of products from a single store
	 * @param req Request
	 * @param res Response
	 */
	@Get(':store')
	async products(req: Request, res: Response): Promise<void> {
		const store = storeSchema.parse(req.params.store);
		const products = await redis.smembers(`store:${store}`);

		res.json(products.map(p => JSON.parse(p) as GenericProduct));
	}
}
