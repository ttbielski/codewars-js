// Link: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter(item => !geese.includes(item));
}
