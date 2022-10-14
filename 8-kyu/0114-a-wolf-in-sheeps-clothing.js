// Link: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function warnTheSheep(queue) {
  const wolfPosition = queue.reverse().indexOf('wolf');
  
  return wolfPosition === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
}
