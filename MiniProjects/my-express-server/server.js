const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at : prempardeshi283@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("I am Prem Pardeshi and I am a gamer.");
});

app.get("/hobby", function (req, res) {
  res.send("Gaming");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
