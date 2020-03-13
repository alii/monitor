import { Route, RouteTypes } from '../util';
import Express from 'express';

import Site from '../../models/Site';

class GetSites extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getSites');
  }

  async handle(req: Express.Request, res: Express.Response) {
    const sites = await Site.find();
    res.status(203).json({ error: false, sites });
  }
}

export default GetSites;
