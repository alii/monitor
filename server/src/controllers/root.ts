import {Controller, Get} from '@overnightjs/core';
import {Request, Response} from 'express';
import {Store} from '../../../shared/types';

@Controller('')
export class Root {
	@Get('stores')
	async root(req: Request, res: Response): Promise<void> {
		const stores = Object.values(Store);
		res.json(stores);
	}
}
