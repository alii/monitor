import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  variants: [String],
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
