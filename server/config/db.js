const mongoose = require("mongoose");

function runDB() {
  mongoose.connect("mongodb://ebrahim:123@ac-0k5qbva-shard-00-00.ionptfc.mongodb.net:27017,ac-0k5qbva-shard-00-01.ionptfc.mongodb.net:27017,ac-0k5qbva-shard-00-02.ionptfc.mongodb.net:27017/shopping-cart?ssl=true&replicaSet=atlas-pxmwai-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })
    .then((result) => {
      console.log("connection");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = runDB;
