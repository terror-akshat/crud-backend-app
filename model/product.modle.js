const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      defalut: 0,
    },
    price: {
      type: Number,
      required: true,
      defalut: 0,
    },
    image: {
      type: String,
      requires: false,
    },
  },
  {
    Timestamp: true,
  }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
