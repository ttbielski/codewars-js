// Link: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function fakeBin(x){
  return x.split('').map(char => char < 5 ? '0' : '1').join('');
}
