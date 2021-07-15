import 'express-async-errors';

import {Server} from '@overnightjs/core';
import {Products} from './controllers/products';
import {Scheduler} from './scheduler';
import {timestamp, title} from './utils';
import {GenericProduct, Store} from '../../shared/types';
import {redis} from './redis';
import {Root} from './controllers/root';
import cors from 'cors';

const server = new Server();

server.app.use(cors());

server.addControllers([new Products(), new Root()]);

const scheduler = new Scheduler();

scheduler.on('message', (message: string) => {
	console.log(`${timestamp()} ${title('scheduler')}: ${message}`);
});

scheduler.on('restock', (store: Store, product: GenericProduct) => {
	console.log(`${timestamp()} ${title('scheduler/restock')} (${title(store)}) ${product.name}`);
});

void redis.connect().then(async () => {
	console.log(`${timestamp()} ${title('redis')}: connected`);

	server.app.listen(8080, () => {
		console.log(`${timestamp()} ${title('http')}: 🚀 ready on :8080`);
	});
});
