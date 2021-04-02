import "express-async-errors";

import { Server } from "@overnightjs/core";
import { Products } from "./controllers/products";
import { Scheduler } from "./scheduler";
import { timestamp, title } from "./utils";
import { GenericProduct, Store } from "./types";

const server = new Server();

server.addControllers([new Products()]);

const scheduler = new Scheduler();

scheduler.on("message", (message: string) => {
  console.log(`${timestamp()} ${title("scheduler")}: ${message}`);
});

scheduler.on("restock", (store: Store, product: GenericProduct) => {
  console.log(`${timestamp()} ${title("scheduler/restock")} (${title(store)}) ${product.name}`);
});

server.app.listen(8080, () => {
  console.log(`${timestamp()} ${title("http")}: 🚀 ready on :8080`);
});
