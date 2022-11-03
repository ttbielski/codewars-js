// Link: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getSum(a, b) {
  if (a > b) [a, b] = [b, a];
  
  if (a === b) {
    return a;
  } else {
    let sum = 0;
    
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    
    return sum;
  }
}
