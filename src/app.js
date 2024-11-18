/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();

  document.getElementById("generate-btn").onclick = generateRandomCard;

  document.getElementById("width-input").addEventListener("input", function() {
    const card = document.getElementById("card");
    card.style.width = this.value;
  });

  document.getElementById("height-input").addEventListener("input", function() {
    const card = document.getElementById("card");
    card.style.height = this.value;
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
