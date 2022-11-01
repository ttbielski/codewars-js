// Link: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getMiddle(s) {
  const middleChar = Math.floor(s.length / 2);
  
  return s.length % 2 === 0 ? s[middleChar - 1] + s[middleChar] : s[middleChar];
}
