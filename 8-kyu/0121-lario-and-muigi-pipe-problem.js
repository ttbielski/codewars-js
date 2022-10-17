// Link: https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function pipeFix(numbers){
  const start = Math.min(...numbers);
  const end = Math.max(...numbers);
  const pipes = [];
  
  for (let i = start; i <= end; i++) {
    pipes.push(i);
  }
  
  return pipes;
}
