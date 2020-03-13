import * as mongoose from 'mongoose';
import Product from './Product';

const Site = new mongoose.Schema({
  name: String,
  product: Product,
});

export default Site;
