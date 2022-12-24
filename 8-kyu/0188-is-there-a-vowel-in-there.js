// Link: https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function isVow(a) {
  const vowels = new Map([
    [97, 'a'],
    [101, 'e'],
    [105, 'i'],
    [111, 'o'],
    [117, 'u'],
  ]);

  return a.map((number) => vowels.has(number) ? vowels.get(number) : number);
}
