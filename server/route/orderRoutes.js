const express = require("express");
const Orders = require("../models/orderModel");
const router = express.Router();

// order
router.get("/api/orders", async (req, res) => {
  const orders = await Orders.find();
  res.send(orders);
});

router.post("/api/orders", async (req, res) => {
  const order = await new Orders(req.body).save();
  res.send(order);
});

router.delete("/api/orders/:id", async (req, res) => {
  const deleteOrder = await Orders.findByIdAndDelete(req.params.id);
  res.send(deleteOrder);
});


module.exports = router