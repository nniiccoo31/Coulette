console.log("Welcome to Coulette");

const button = document.querySelector("button");
const header = document.querySelector("header");

const colorOfChoise = "yellow";
const defaultColor = "blue";

function changeBgColor() {
  if (header.style.backgroundColor !== colorOfChoise) {
    console.log("farbe wird gelb");
    return (header.style.backgroundColor = colorOfChoise);
  } else {
    console.log("farbe wird blau");
    return (header.style.backgroundColor = defaultColor);
  }
}

button.addEventListener("click", changeBgColor);
