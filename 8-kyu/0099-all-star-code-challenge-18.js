// Link: https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function strCount(str, letter) {  
  return str.split('').filter(char => char === letter).length;
}
