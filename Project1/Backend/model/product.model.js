import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true
    },
    productprice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model('products', productSchema)
export default Product