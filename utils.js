export function rndomInt() {
  return Math.floor(Math.random() * 100);
}

export function average(...arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/** @returns A Super Duper Random Number */
export function coolNumber() {
  return getAverage(...new Array({ length: 50 }, getRandomInt));
}
