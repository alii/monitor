import { Route, RouteTypes } from '../util';
import { getConfig } from '../../functions/Config';

class GetConfig extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getConfig');
  }

  async handle(req, res) {
    const config = await getConfig();
    if (!config) return res.status(404).json({ error: true, message: 'No config found' });

    res.json({ error: false, message: 'Successfully got Config', data: config });
  }
}

export default GetConfig;
