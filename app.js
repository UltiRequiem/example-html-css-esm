import { coolNumber } from "./utils.js";

const text = document.getElementById("randomNumber");

text.innerHTML = coolNumber();

const button = document.getElementById("randomNumberButton");

button.addEventListener("click", () => {
  text.innerHTML = coolNumber();
});
