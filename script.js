console.log("Welcome to Coulette");

// globale Variablen
{
  const generateButton = document.querySelector("#generateButton");
  const header = document.querySelector("header");
  const saveButton = document.querySelector("#saveButton");
}

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

function saveColor() {
  // generate color
  // create new list element document.createElement
  //const li = document.body.main.ul("li");
  //const ul = document.createElement("li");
  //const txt = document.createTextNode("color");
  //li.backgroundColor = color;
  //ul.appendChild(txt);
  // set properties for new element
  // append new element to the list
  console.log("works");
  const colorValueEl = document.querySelector("#color-value");
  console.log(colorValueEl);
  const color = colorValueEl.innerText;
  const colorList = document.querySelector("#colors");
  const newColor = document.createElement("li");
  newColor.innerText = color;
  newColor.style.background = color;
  colorList.appendChild(newColor);
}

// Buttons
{
  // Generate color of header on click on button
  generateButton.addEventListener("click", changeBgColor);
  // Generate
  saveButton.addEventListener("click", saveColor);
}

// Generate initial color
changeBgColor();

/*
document.body.style.backgroundColor
header.style.backgroundColor

*/
