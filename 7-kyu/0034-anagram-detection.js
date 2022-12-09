// Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function isAnagram(test, original) {
  test = test.toLowerCase().split('').sort().join('');
  original = original.toLowerCase().split('').sort().join('');
  
  return test === original;
}
