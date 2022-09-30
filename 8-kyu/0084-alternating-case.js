// Link: https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

String.prototype.toAlternatingCase = function () {
  return this.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
}
