export function randomInt() {
  return Math.floor(Math.random() * 100);
}

export function average(...arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function coolNumber() {
  return average(...Array.from({ length: 50 }, randomInt));
}
