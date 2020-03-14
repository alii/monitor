import { Route, RouteTypes } from '../util';

import Site from '../../models/Site';

class GetSites extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getSites');
  }

  async handle(req, res) {
    const sites = await Site.find();

    if (sites.length === 0) return res.status(200).json({ error: true, message: 'No sites', sites });

    res.json({ error: false, sites });
  }
}

export default GetSites;
