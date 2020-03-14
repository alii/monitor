import mongoose from 'mongoose';

const ConfigSchema = new mongoose.Schema({
  defaultKeywords: { type: String, default: '+Yeezy, +350, -Toddler' },
  defaultTimeout: { type: Number, default: 30000 },
  discordWebhook: {
    id: String,
    token: String,
  },
});

const Config = mongoose.model('Config', ConfigSchema);

export { ConfigSchema, Config };
export default Config;
