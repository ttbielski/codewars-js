// Link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq);
  
  return Number.isInteger(squareRoot) ? (squareRoot + 1) ** 2 : -1;
}
