// Link: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function squareDigits(num){
  return Number(String(num).split('').map(num => num ** 2).join(''));
}
