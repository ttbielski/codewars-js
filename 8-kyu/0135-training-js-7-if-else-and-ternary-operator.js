// Link: https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
