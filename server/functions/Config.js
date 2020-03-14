import Config from '../models/Config';

const updateConfig = async (key, value) => {
  const config = await Config.findOne();
  if (!config) return Config.create({});

  config[key] = value;

  return config.save();
};

const getConfig = async () => {
  const config = await Config.findOne();
  if (!config) return Config.create({});

  return config;
};

export { updateConfig, getConfig };
export default updateConfig;
