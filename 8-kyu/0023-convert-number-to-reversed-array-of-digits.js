// Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function digitize(n) {
  return String(n).split('').reverse().map(Number);
}
