// Link: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i + 1];
    }
  }
  
  return null;
}
