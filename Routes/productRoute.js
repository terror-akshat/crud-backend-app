const express = require("express");
const router = express.Router();
const Product = require("../model/product.modle.js");
const {
  getProducts,
  getProduct,
  addProducts,
  updateProducts,
  deleteProduct,
} = require("../Controller/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

//add the product
router.post("/", addProducts);

//update the products
router.put("/:id", updateProducts);

//delete the product
router.delete("/:id", deleteProduct);

module.exports = router;
