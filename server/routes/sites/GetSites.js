import { Route, RouteTypes } from '../util';

import Site from '../../models/Site';

class GetSites extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getSites');
  }

  async handle(req, res) {
    const sites = await Site.find();

    if (sites.length === 0) return res.status(200).json({ error: true, message: 'No sites', sites });

    // console.log('Found sites');
    res.json({
      error: false,
      sites: sites.map(site => {
        return {
          _id: site._id,
          url: site.url,
          name: site.name,
        };
      }),
    });
  }
}

export default GetSites;
