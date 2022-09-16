// Link: https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function betterThanAverage(classPoints, yourPoints) {
  const classAverage = [...classPoints, yourPoints].reduce((a, b) => a + b, 0) / (classPoints.length + 1);
  
  return yourPoints > classAverage;
}
