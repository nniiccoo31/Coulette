console.log("Welcome to Coulette");

const button = document.querySelector("button");
const header = document.querySelector("header");

// randomNumber: Generate random number between min and max
function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

// randomHexNumber: Generate random hex number for color
function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}

// randomHexColor: Generate random hex color
function randomHexColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();

  return ("#" + red + green + blue).toUpperCase();
}

// changeBgColor: Generate random color and change color of header
function changeBgColor() {
  const color = randomHexColor();

  const ColorValue = document.querySelector("#color-value");
  ColorValue.textContent = color;

  const body = document.querySelector("header");
  body.style.backgroundColor = color;
}

// Generate color of header on click on button
button.addEventListener("click", changeBgColor);

// Generate initial color
changeBgColor();

/*
document.body.style.backgroundColor
header.style.backgroundColor

*/
