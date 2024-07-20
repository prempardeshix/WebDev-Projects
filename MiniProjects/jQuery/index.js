// jQuery is a library

$(document).ready(function () {
  //two parameter inside method to set value of property
  // $("h1").css("color", "red");
  $("button").css("color", "green");
  //one parameter inside method to set value of property
  // console.log($("h1").css("font-size"));
  $("h1").addClass("big-title margin-left");
  // $("h1").removeClass("big-title");
  $("h1").text("Bye!");
  $("button").html("<em>UwU</em>");
  $(".Owo").text("Owo");
  console.log($("h1").attr("class"));
});

$(".Owo").click(function () {
  $("h1").text("UwU");
  $("h1").css("color", "purple");
  setTimeout(function () {
    $("h1").css("color", "yellow");
    $("h1").text("Bye!");
  }, 100);
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$("body").keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

// .before will add the html element before selected tag
// .after will add the html element after selected tag
// .prepend will add the html element inside selected tag before it's contents
// .append will add the html element inside selected tag after it's contents

$("h1").before("<button>New</button>");

// $("button").remove();

$("h1").click(function () {
  $("h1").fadeOut();
});
