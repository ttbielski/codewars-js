// Link: https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

String.prototype.digit = function() {
  return /^\d$/.test(this);
};
