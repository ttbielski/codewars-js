// Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function isPalindrome(x) {
  const reversedString = x.split('').reverse().join('').toLowerCase();
  
  return x.toLowerCase() === reversedString;
}
