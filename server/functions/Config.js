import { writeFileSync, readFileSync, existsSync } from 'fs';
import path from 'path';
import YAML from 'yaml';

const CONFIG_PATH = path.join(__dirname, '..', '..', 'config.yml');

const getConfig = async () => {
  const config = readFileSync(CONFIG_PATH).toString();

  return YAML.parse(config);
};

const updateConfig = async (key, value) => {
  const config = await getConfig();
  const newConfig = { ...config, [key]: value };

  writeFileSync(CONFIG_PATH, YAML.stringify(newConfig));
};

if (!existsSync(CONFIG_PATH)) writeFileSync(CONFIG_PATH, '');

export { updateConfig, getConfig };
