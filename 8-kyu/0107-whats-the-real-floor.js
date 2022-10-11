// Link: https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getRealFloor(n) {
  if (n < 1) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else {
    return n - 2;
  }
}
