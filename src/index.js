import { getAverage, getRandomInt } from "./utils.js";

function getCoolNumber() {
  return getAverage(getRandomInt(), getRandomInt());
}

setInterval(() => {
  document.getElementById("text").innerHTML = getCoolNumber();
}, 500);
