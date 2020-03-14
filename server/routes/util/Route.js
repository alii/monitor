class Route {
  constructor(method = 'get', path) {
    this.method = method;
    this.path = path;

    this.internalHandle = this.internalHandle.bind(this);
    this.handle = this.handle.bind(this);
  }

  /**
   *
   * @param req The request object
   * @param res The reponse object
   */
  async internalHandle(req, res) {
    this.handle(req, res);
  }

  /**
   * Handler
   * @param req The request object
   * @param res The response object
   */
  async handle(req, res) {
    res.json({ error: true, message: 'This route was not overwritten!' });
  }
}

export default Route;
