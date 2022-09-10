// Link: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((a, b) => a + b, 0);
}
