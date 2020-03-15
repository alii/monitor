import { Route, RouteTypes } from '../util';

class GetEnv extends Route {
  constructor() {
    super(RouteTypes.GET, '/api/getEnv');
  }

  async handle(req, res) {
    res.json({ error: false, message: 'Successfully got Config', data: process.env });
  }
}

export default GetEnv;
