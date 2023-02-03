// Link: https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function sumDigits(number) {
  return String(Math.abs(number)).split('').reduce((a, b) => a + Number(b), 0);
}
