import { Route, RouteTypes } from '../util';

import Site from '../../models/Site';

class DeleteSite extends Route {
  constructor() {
    super(RouteTypes.POST, '/api/deleteSite');
  }

  async handle(req, res) {
    const site = await Site.findOne({ _id: req.body._id });
    if (!site) return res.status(404).json({ error: true, message: 'Site not found' });

    const result = await Site.deleteOne({ _id: req.body._id });
    if (result.ok && result.deletedCount === 1)
      return res.status(200).json({ error: false, message: 'Successfully deleted' });

    res.status(500).json({ error: true, message: 'Something went wrong. Try it again?' });
  }
}

export default DeleteSite;
