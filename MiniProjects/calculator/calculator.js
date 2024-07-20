const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Result of the calculation is " + result);
});

app.listen(4000, function () {
  console.log("Server is running on port 4000.");
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var  result = weight/(height*height);

  res.send("Your BMI is "+result);
});
