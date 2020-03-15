import log4js from 'log4js';

const logger = log4js.getLogger('Backend');
logger.level = 'debug';

log4js.configure({
  levels: {
    SUCCESS: { value: 20001, colour: 'green' },
  },
  appenders: { out: { type: 'stdout' } },
  categories: { default: { appenders: ['out'], level: 'SUCCESS' } },
});

export default io => {
  return {
    info: (...args) => {
      logger.info(...args);
      io?.sockets.emit('log', 'info', ...args);
    },

    debug: (...args) => {
      io?.sockets.emit('log', 'debug', ...args);
    },

    error: (...args) => {
      logger.error(...args);
      io?.sockets.emit('log', 'error', ...args);
    },

    success: (...args) => {
      logger.success(...args);
      io?.sockets.emit('log', 'success', ...args);
    },

    warn: (...args) => {
      logger.success(...args);
      io?.sockets.emit('log', 'warn', ...args);
    },
  };
};
