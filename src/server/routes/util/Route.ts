import Express from 'express';

class Route {
  method: string;
  path: string;

  constructor(method: string = 'get', path: string) {
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
  async internalHandle(req: Express.Request, res: Express.Response): Promise<void> {
    this.handle(req, res);
  }

  /**
   * Handler
   * @param req The request object
   * @param res The response object
   */
  async handle(req: Express.Request, res: Express.Response): Promise<any> {
    res.json({ error: true, message: 'This route was not overwritten!' });
  }
}

export default Route;
