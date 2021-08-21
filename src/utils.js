export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  return '#' + Math.floor(Math.random() * 10000000).toString(16);
}

export function getRandomEl(items) {
  return items[Math.floor(Math.random() * items.length)];
}
