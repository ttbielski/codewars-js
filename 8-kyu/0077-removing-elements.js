// Link: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function removeEveryOther(arr){
  return arr.filter((item, index) => index % 2 === 0);
}
