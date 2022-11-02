// Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function accum(s) {
  return s.split('').map((char, index) => char.toUpperCase() + char.repeat(index).toLowerCase()).join('-');
}
