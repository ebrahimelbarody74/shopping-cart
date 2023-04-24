const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./route/routes");
const routerOrder = require("./route/orderRoutes");
const runDB = require("./config/db");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);
app.use("/", routerOrder);

// run DB

runDB();

// app.get("/api/products", async (req, res) => {
//   const p = await Product.find();
//   res.send(p);
// });
// app.post("/api/products", async (req, res) => {
//   const newProduct = new Product(req.body);
//   let saveProduct = await newProduct.save();
//   res.send(saveProduct);
// });

// app.delete("/api/products/:id", async (req, res) => {
//   const deleteProduct = await Product.findByIdAndDelete(req.params.id);
//   res.send(deleteProduct);
// });

app.listen(3002, () => {
  console.log("Running....");
});
