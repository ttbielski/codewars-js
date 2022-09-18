// Link: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

const countSheep = function(num){
  let murmur = '';
  
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  
  return murmur;
}
