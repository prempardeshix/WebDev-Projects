const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=10f3c9cc62f09382f0938a98385f7f15&units=metric";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const temp = JSON.parse(data).main.temp;
      const description = JSON.parse(data).weather[0].description;
      const icon =
        "https://openweathermap.org/img/wn/" +
        JSON.parse(data).weather[0].icon +
        "@2x.png";
      res.write(
        "<h1>The temperature in " +
          city +
          " is " +
          temp +
          " degree celsius.</h1>"
      );
      res.write("<h1>The weather is currently " + description + ".</h1>");
      res.write("<img src=" + icon + ">");
      res.send();
    });
  });
});
