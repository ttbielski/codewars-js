// Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
