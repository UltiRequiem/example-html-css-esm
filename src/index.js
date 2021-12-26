import { getAverage, getRandomInt } from "./utils.js";

function getCoolNumber() {
  return getAverage(getRandomInt(), getRandomInt());
}

const text = document.getElementById("text");

setInterval(() => (text.innerHTML = getCoolNumber()), 150);
