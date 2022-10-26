// Link: https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}
