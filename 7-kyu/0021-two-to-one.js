// Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}
