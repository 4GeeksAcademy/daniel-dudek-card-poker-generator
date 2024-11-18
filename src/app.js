/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();

  const widthInput = document.getElementById("width-input");
  const heightInput = document.getElementById("height-input");
  const minWidth = 100;
  const minHeight = 240;

  document.getElementById("generate-btn").onclick = generateRandomCard;

  widthInput.addEventListener("blur", function() {
    const card = document.getElementById("card");
    const newWidth = parseInt(widthInput.value, 10);
    if (newWidth >= minWidth) {
      card.style.width = newWidth + "px";
    } else {
      alert(`El ancho debe ser al menos ${minWidth}px.`);
      widthInput.value = "";
    }
  });

  heightInput.addEventListener("blur", function() {
    const card = document.getElementById("card");
    const newHeight = parseInt(heightInput.value, 10);
    if (newHeight >= minHeight) {
      card.style.height = newHeight + "px";
    } else {
      alert(`El alto debe ser al menos ${minHeight}px.`);
      heightInput.value = "";
    }
  });

  function generateRandomCard() {
    const symbols = ["♠", "♣", "♥", "♦"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suitClasses = ["spade", "club", "heart", "diamond"];

    const randomSuit = Math.floor(Math.random() * symbols.length);
    const randomValue = Math.floor(Math.random() * values.length);

    const card = document.getElementById("card");
    const symbolTop = document.getElementById("symbol-top");
    const symbolBottom = document.getElementById("symbol-bottom");
    const number = document.getElementById("number");

    number.textContent = values[randomValue];
    symbolTop.textContent = symbols[randomSuit];
    symbolBottom.textContent = symbols[randomSuit];

    card.className = "card";
    card.classList.add(suitClasses[randomSuit]);
  }

  document.getElementById("card").onclick = generateRandomCard;

  setInterval(() => generateRandomCard(), 3000);
};
