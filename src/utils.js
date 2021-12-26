export function getRandomInt(max = 10) {
  return Math.floor(Math.random() * max);
}

export function getAverage(...arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
