import mongoose from 'mongoose';
import { ProductSchema as Product } from './Product';

const SiteSchema = new mongoose.Schema({
  name: String,
  url: String,
  internal: Number,
  products: [Product],
  keywords: String,

  // If present, override the Config discordWebhook
  discordWebhook: {
    id: String,
    token: String,
  },
});

const Site = mongoose.model('Site', SiteSchema);

export default Site;
