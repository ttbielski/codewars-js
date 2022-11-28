// Link: https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function billboard(name, price = 30) {
  return name.split('').reduce((sum) => sum + price, 0);
}
