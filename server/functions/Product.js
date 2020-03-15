import Site from '../models/Site';
import Axios from 'axios';
export class BasicSite {
  constructor(mongoID) {
    this.site = Site.findOne({ _id: mongoID });
  }

  async getProducts() {
    // TODO: Add this
  }
}
