// Link: https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function rentalCarCost(d) {
  const dailyCost = 40;
  
  if (d >= 7) {
    return d * dailyCost - 50;
  } else if (d >= 3) {
    return d * dailyCost - 20;
  } else {
    return d * dailyCost;
  }
}
