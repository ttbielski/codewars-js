// Link: https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function noBoringZeros(n) {
  return +`${n}`.replace(/0+$/, '');
}
