// Link: https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function pickIt(arr) {
  const odd = [];
  const even = [];
  
  for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 === 0 ? even : odd).push(arr[i]);
  }
  
  return [odd, even];
}
