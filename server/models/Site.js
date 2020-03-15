import mongoose from 'mongoose';
import { ProductSchema as Product } from './Product';

const SiteSchema = new mongoose.Schema({
  name: String,
  url: String,
  products: [Product],
  keywords: String,
  interval: { type: Number, default: 10000 },
  lastCache: { type: Number, default: null }, // This is Date.getTime()

  // If present, override the Config discordWebhook
  discordWebhook: {
    id: String,
    token: String,
  },
});

const Site = mongoose.model('Site', SiteSchema);

export default Site;
