import { Route, RouteTypes } from '../util';
import { Config } from '../../models/Config';

class GetConfig extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getConfig');
  }

  async handle(req, res) {
    const config = await Config.findOne();
    if (!config) return res.status(404).json({ error: true, message: 'No config found' });

    res.json({ error: false, message: 'Successfully got Config', data: config });
  }
}

export default GetConfig;
