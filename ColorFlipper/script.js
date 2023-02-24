const button = document.querySelector(".buttonClick");

button.addEventListener("click", (e) => {
  const rgbColor = document.querySelector(".rgbColor");
  const randomNumber1 = Math.floor(Math.random() * 450 + 1);
  const randomNumber2 = Math.floor(Math.random() * 1000 + 1);
  const randomNumber3 = Math.floor(Math.random() * 700 + 1);
  const container = document.querySelector(".container");
  const rgbaColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
  container.style.backgroundColor = rgbaColor;
  rgbColor.textContent = rgbaColor;
  //   console.log("button clicked");
});
