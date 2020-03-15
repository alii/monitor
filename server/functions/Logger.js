import log4js from 'log4js';

const logger = log4js.getLogger('Backend');
logger.level = 'debug';

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
  };
};
