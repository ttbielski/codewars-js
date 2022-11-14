// Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function removeSmallest(numbers) {
  const indexOfMin = numbers.indexOf(Math.min(...numbers));

  return numbers.filter((number, index) => index !== indexOfMin);
}
