let modal = document.querySelector(".modal");
let content = document.querySelector(".content");

function add() {
  modal.style.scale = 1;
  content.classList.add("opacity");
}

function remove() {
  modal.style.scale = 0;
  content.classList.remove("opacity");
}

let open = document.querySelector(".open");
open.addEventListener("click", add);

let close = document.querySelector(".close");
close.addEventListener("click", remove);
