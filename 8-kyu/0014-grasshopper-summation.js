// Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

var summation = function (num) {
  let summation = 0;
  
  for (let i = 1; i <= num; i++) {
    summation += i;
  }
  
  return summation;
}
