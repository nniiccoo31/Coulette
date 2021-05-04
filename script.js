console.log("Welcome to Coulette");

// globale Variablen

const generateButton = document.querySelector("#generateButton");
const header = document.querySelector("header");
const saveButton = document.querySelector("#saveButton");
// Task: Duplicate Check
// Saved Colors
const colors = [];
let currentColor = null;

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
  const randomColor = randomHexColor();

  const ColorValue = document.querySelector("#color-value");
  ColorValue.textContent = randomColor;

  const body = document.querySelector("header");
  body.style.backgroundColor = randomColor;

  currentColor = randomColor;

  updateSaveButtonStatus();
}

function saveColor() {
  const colorList = document.querySelector("#colors");
  const newColorElement = document.createElement("li");
  newColorElement.innerText = currentColor;
  newColorElement.style.background = currentColor;
  const deleteButton = document.createElement("Button"); // Create a <button> element
  deleteButton.innerHTML = "Delete Color"; // Insert text

  if (!colors.includes(currentColor)) {
    colors.push(currentColor);

    colorList.appendChild(newColorElement);
    newColorElement.setAttribute("data-color", currentColor);
    newColorElement.appendChild(deleteButton); // Delete Button

    updateSaveButtonStatus();
  }
  deleteButton.addEventListener("click", deleteColor);
}

// Disable save Button
function updateSaveButtonStatus() {
  if (colors.includes(currentColor)) {
    saveButton.setAttribute("disabled", "");
  } else {
    saveButton.removeAttribute("disabled");
  }
}

// Function to delete color list item
function deleteColor(clickEvent) {
  const colorLiElement = clickEvent.target.parentElement;

  // Get color
  let colorValue = colorLiElement.getAttribute("data-color");
  //let deleteColorIndex = colors.indexOf(colorValue);
  colors.splice(colorValue, 1);

  // Delete Element
  colorLiElement.remove();
  console.log(colors);
}

// Button Events

// Generate color of header on click on button
generateButton.addEventListener("click", changeBgColor);
// Save color in list on click on button
saveButton.addEventListener("click", saveColor);

// Generate initial color
changeBgColor();
