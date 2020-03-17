import { scheduleJob } from 'node-schedule';
import ioLogger from './functions/Logger';
import Site from './models/Site';
import EventEmitter from 'events';
import { BasicSite } from './functions/BasicSite';

const debug = process.env.NODE_ENV === 'development';

class Scheduler extends EventEmitter {
  constructor(io) {
    super();

    this.log = ioLogger(io);
    this.loop = this.loop.bind(this);
    this.handleSite = this.handleSite.bind(this);

    this.schedule = scheduleJob(`*/${debug ? 10 : 1} * * * * *`, this.loop);
  }

  async loop() {
    this.log.debug('Looped');

    const sites = await Site.find();
    sites.forEach(site => this.handleSite(site));
  }

  /**
   * Handles a task and detemines if it needs restocking
   * @param {import("mongoose").Document} site
   */
  async handleSite(site) {
    const now = Date.now();

    if (site.lastCache + site.interval <= now || site.lastCache === null) {
      this.emit('fetching site', site);

      const Site = new BasicSite(site);
      await Site.getProducts();

      site.lastCache = now;
      await site.save();
    }
  }
}

export default Scheduler;
