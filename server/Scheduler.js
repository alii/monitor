import { scheduleJob } from 'node-schedule';
import ioLogger from './functions/Logger';
import Site from './models/Site';
import EventEmitter from 'events';

const log = ioLogger(null);

const debug = process.env.NODE_ENV === 'development';

class Scheduler extends EventEmitter {
  constructor() {
    super();
    this.loop = this.loop.bind(this);
    this.handleSite = this.handleSite.bind(this);

    this.schedule = scheduleJob(`*/${debug ? 10 : 1} * * * * *`, this.loop);
  }

  async loop() {
    log.debug('Looped');

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
      this.emit('need monitoring', site);

      site.lastCache = now;
      await site.save();
    }
  }
}

export default Scheduler;
