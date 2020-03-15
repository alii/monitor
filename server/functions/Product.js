import Site from '../models/Site';

export class BasicSite {
  constructor(mongoID) {
    Site.findOne({ _id: mongoID });
  }

  async getStock() {
    // TODO: Add this
  }
}
