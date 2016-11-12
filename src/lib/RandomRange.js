import shuffle from 'just-shuffle';

export default function randomRange(toNumber) {
  return shuffle([...Array(toNumber).keys()]).map((n) => n + 1);
}
