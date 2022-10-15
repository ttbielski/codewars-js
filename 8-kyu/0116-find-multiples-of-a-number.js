// Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function findMultiples(integer, limit) {
  let multiples = [];
  
  for (let i = integer; i <= limit; i++) {
    i % integer === 0 && multiples.push(i);
  }
  
  return multiples;
}
