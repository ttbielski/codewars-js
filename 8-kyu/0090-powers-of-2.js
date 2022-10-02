// Link: https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function powersOfTwo(n){
  const powers = [];
  
  for (let i = 0; i <= n; i++) {
    powers.push(2 ** i);
  }
  
  return powers;
}
