const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  imageurl: String,
  price: Number,
  sizes: [String],
});

module.exports = productSchema;
