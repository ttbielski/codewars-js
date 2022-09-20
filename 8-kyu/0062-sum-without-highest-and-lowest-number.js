// Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function sumArray(array) {
  if (array === null || array === undefined || array.length === 0) {
    return 0;
  } else {
    const orderedArray = array.sort((a, b) => a - b);
    orderedArray.shift();
    orderedArray.pop();
    return orderedArray.reduce((a, b) => a + b, 0);
  }
}
