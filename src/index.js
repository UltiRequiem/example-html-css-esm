import getCoolNumber from "./utils.js";

const text = document.getElementById("text");

setInterval(() => (text.innerHTML = getCoolNumber()), 150);
