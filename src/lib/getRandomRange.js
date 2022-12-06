import shuffle from "just-shuffle";

export function getRandomRange(toNumber) {
  return shuffle([...Array(toNumber).keys()]).map((n) => n + 1);
}
