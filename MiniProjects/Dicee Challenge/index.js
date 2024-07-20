var randomVariable1 = Math.floor(6 * Math.random()) + 1;
var randomVariable2 = Math.floor(6 * Math.random()) + 1;

var randomImage1 = "dice" + randomVariable1 + ".png";
var randomImage2 = "dice" + randomVariable2 + ".png";

var randomSource1 = "images/" + randomImage1;
var randomSource2 = "images/" + randomImage2;

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource1);

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);

if (randomVariable1 == randomVariable2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomVariable1 < randomVariable2) {
  document.querySelector("h1").innerHTML = "Player 2 is the winner!";
} else {
  document.querySelector("h1").innerHTML = "Player 1 is the winner!";
}
