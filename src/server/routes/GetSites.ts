import { Route, RouteTypes } from './util';
import Express from 'express';

class GetSites extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getSites');
  }

  async handle(req: Express.Request, res: Express.Response) {
    res.json('sites');
  }
}

export default GetSites;
