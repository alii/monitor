import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import { redis } from "../redis";

import * as z from "zod";
import { Store } from "../types";

const stores = Object.values(Store) as string[];

const storeSchema = z.string().refine((s) => stores.includes(s));

@Controller("products")
export class Products {
  /**
   * Get a list of products from a single store
   * @param req Request
   * @param res Response
   */
  @Get(":store")
  async products(req: Request, res: Response): Promise<void> {
    const store = storeSchema.parse(req.params.store);
    const entries = Object.entries(await redis.hgetall(store));

    const products = entries.map((entry) => {
      const [key, json] = entry;
      return [key, JSON.parse(json)] as const;
    });

    res.json(Object.fromEntries(products));
  }
}
