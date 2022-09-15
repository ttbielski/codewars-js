// Link: https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

const reverseSeq = n => {
  const arr = [];
  
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  
  return arr;
};
