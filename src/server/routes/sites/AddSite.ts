import { Route, RouteTypes } from '../util';
import Express from 'express';
import fetch from 'node-fetch';

import * as cheerio from 'cheerio';

import Site from '../../models/Site';

class AddSite extends Route {
  constructor() {
    super(RouteTypes.POST, '/api/addSite');
  }

  async handle(req: Express.Request, res: Express.Response) {
    const site = await Site.findOne({ url: req.body.url });
    if (site) return res.status(200).json({ error: true, message: 'Site already exists', site });

    try {
      const { url, interval } = req.body;
      const nameFetch = await fetch(url, {
        headers: {
          'user-agent': 'Discordbot/2.0',
        },
      });

      const body = await nameFetch.text();

      const $ = cheerio.load(body);
      const name = $('title')
        .text()
        .trim();

      const site = await Site.create({ url, interval, name, products: [] });
      res.status(201).json({ error: false, message: 'Created', site });
    } catch (_) {
      console.warn(_);
      res.status(400).json({ error: true, message: 'Something went wrong', status: 400 });
    }
  }
}

export default AddSite;
