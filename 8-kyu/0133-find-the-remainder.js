// Link: https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function remainder(n, m) {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  
  return max % min;
}
