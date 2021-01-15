const express = require("express");
const app = express();

console.log("http://localhost:3000");

const recommender = require("./recommender");

app.use("/", (req, res, next) => {
  res.send("<h1>Hello World !</h1>");
});


app.listen(3000);
