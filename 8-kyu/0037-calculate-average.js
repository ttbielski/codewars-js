// Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function find_average(array) {
  if (array.length) {
    return array.reduce((a, b) => a + b, 0) / array.length;
  } else {
    return 0;
  }
}
