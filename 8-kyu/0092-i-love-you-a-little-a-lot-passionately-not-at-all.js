// Link: https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function howMuchILoveYou(nbPetals) {
  const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  
  return phrases[(nbPetals - 1) % phrases.length];
}
