let add = document.querySelector(".add");
add.addEventListener("click", () => {
  let oldCount = document.querySelector(".count").textContent;
  let newCount = parseInt(oldCount) + 1;
  document.querySelector(".count").textContent = newCount;
});

let subtract = document.querySelector(".subtract");
subtract.addEventListener("click", () => {
  let oldCount = document.querySelector(".count").textContent;
  let newCount = parseInt(oldCount) - 1;
  document.querySelector(".count").textContent = newCount;
});
