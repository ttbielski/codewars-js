// Link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function squareSum(numbers){
  return numbers.reduce((a, b) => a + b ** 2, 0);
}
