export function equalFn(word1, word2) {
  return word1 === word2 && word1.length !== 0;
}

export function longFn(word) {
  return word.length >= 10;
}

export function numFn(letter) {
  return !isNaN(letter) && letter !== " ";
}

export function specFn(letter) {
  return letter.toLowerCase() === letter.toUpperCase() && !numFn(letter);
}

export function lowFn(letter) {
  return letter === letter.toLowerCase() && !numFn(letter) && !specFn(letter);
}

export function upFn(letter) {
  return letter === letter.toUpperCase() && !numFn(letter) && !specFn(letter);
}
