import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("products")
export class Products {
  @Get(":store")
  async products(req: Request, res: Response): Promise<void> {
    res.json({ success: true });
  }
}
