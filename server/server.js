const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./route/routes");

const app = express();

app.use(bodyParser.json());
app.use("/", router);

mongoose
  .connect("mongodb://127.0.0.1/react-shopping-cart", { useNewUrlParser: true })
  .then((result) => {
    console.log("connection");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api/products", async (req, res) => {
  const p = await Product.find();
  res.send(p);
});
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  let saveProduct = await newProduct.save();
  res.send(saveProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});

app.listen(3002, () => {
  console.log("Running....");
});
