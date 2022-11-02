// Link: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function DNAStrand(dna){
  return dna.split('').map(char => char === 'A' ? 'T' : char === 'T' ? 'A' : char === 'G' ? 'C' : char === 'C' ? 'G' : '').join('');
}
