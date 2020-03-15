import { Route, RouteTypes } from '../util';
import { updateConfig } from '../../functions/Config';

class UpdateConfig extends Route {
  constructor() {
    super(RouteTypes.POST, '/api/updateConfig');
  }

  async handle(req, res) {
    try {
      await updateConfig(req.body);
    } catch (_) {
      return res.json({ error: true, message: _.message });
    }

    res.json({ error: false, message: 'Successfully updates Config' });
  }
}

export default UpdateConfig;
