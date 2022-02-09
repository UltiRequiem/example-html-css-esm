export function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

export function getAverage(...arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/** @returns A Super Duper Random Number */
export default function getCoolNumber() {
  return getAverage(...new Array({ length: 50 }).map(getRandomInt));
}
