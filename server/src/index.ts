import "express-async-errors";

import { Server } from "@overnightjs/core";
import { Products } from "./controllers/products";

import signale from "signale";

const server = new Server();

server.addControllers([new Products()]);

server.app.listen(8080, () => signale.success("[http] ready on :8080"));
