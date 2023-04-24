const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();

router.get("/api/products", async (req, res) => {
  const p = await Product.find();
  res.send(p);
});
router.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  let saveProduct = await newProduct.save();
  res.send(saveProduct);
});

router.delete("/api/products/:id", async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});


module.exports = router;
