// Link: https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function parseF(s) {
  return /\d/.test(s) ? Number(s) : null;
}
