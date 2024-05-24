const Product = require("../model/product.modle.js");

// // idr get req use kiya hai api ko dekhney ke liye
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ meassage: error.meassage });
  }
};

//ye hum specific product ke liye krte hai
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ meassage: error.meassage });
  }
};

//post a products
// ye post req data base ke andr products ko dale ki hai
//jon products shcema banye the usi ko dala hai
//.create use hua hai database mey product ko bnane ke liye
const addProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ meassage: error.meassage });
  }
};

//update the products
const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//delete the products

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.fintByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product delete successfully" });
  } catch (error) {
    res.status(500).json({ meassage: error.meassage });
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProducts,
  updateProducts,
  deleteProduct,
};
