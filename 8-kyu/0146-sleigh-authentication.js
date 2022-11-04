// Link: https://www.codewars.com/kata/52adc142b2651f25a8000643/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function Sleigh() {
  this.name = 'Santa Claus';
  this.password = 'Ho Ho Ho!';
}

Sleigh.prototype.authenticate = function(name, password) {
  return this.name === name && this.password === password;
};
