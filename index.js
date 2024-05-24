const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.modle.js");
const productRoute = require("./Routes/productRoute.js");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello  from node api");
});

mongoose
  .connect(
    "mongodb+srv://Admin:akshat123@backenddb.gqhzmgx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDb"
  )
  .then(() => {
    console.log("connectes to  database!");
  })
  .catch(() => {
    console.log("error");
  });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
