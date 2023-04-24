const mongoose = require("mongoose");

const orderScema = mongoose.Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = orderScema
