// Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(char => vowels.includes(char)).length;
}
