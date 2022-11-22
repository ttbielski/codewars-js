// Link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function number(array) {
  return array.map((line, index) => `${index + 1}: ${line}`);
}
