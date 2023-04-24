const mongoose = require("mongoose");
const orderScema = require("../schema/orderScema");
const Orders = new mongoose.model("order", orderScema);

module.exports = Orders;
