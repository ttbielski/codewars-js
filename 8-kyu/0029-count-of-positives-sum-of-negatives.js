// Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function countPositivesSumNegatives(input) {
  if (input !== null && input.length) {
    const countOfPositive = input.filter(num => num > 0).length;
    const sumOfNegative = input.filter(num => num < 0).reduce((a, b) => a + b, 0);
    
    return [countOfPositive, sumOfNegative];
  } else {
    return [];
  }
}
