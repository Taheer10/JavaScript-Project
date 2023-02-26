const popUpButton = document.querySelector(".pop");

const close = document.querySelector(".close");

popUpButton.addEventListener("click", function () {
  const popUp = document.querySelector(".popup");
  popUp.style.visibility = "visible";
});

close.addEventListener("click", function () {
  const popUp = document.querySelector(".popup");
  popUp.style.visibility = "hidden";
});
