import log4js from 'log4js';

const logger = log4js.getLogger();
logger.level = 'debug';

export { logger as log };
export default logger;
