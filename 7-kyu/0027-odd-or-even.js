// Link: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function oddOrEven(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  
  return sum % 2 === 0 ? 'even' : 'odd';
}
