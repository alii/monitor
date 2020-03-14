import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  variants: [String],
  name: String,
  handle: String,
  id: Number,
});

const Product = mongoose.model('Product', ProductSchema);

export { ProductSchema, Product };
export default Product;
