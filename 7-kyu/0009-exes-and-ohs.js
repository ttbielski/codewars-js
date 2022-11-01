// Link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function XO(str) {
  const strArr = str.toLowerCase().split('');
  const numOfX = strArr.filter(char => char === 'x').length;
  const numOfO = strArr.filter(char => char === 'o').length;
  
  return numOfX === numOfO;
}
