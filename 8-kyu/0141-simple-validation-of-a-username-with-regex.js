// Link: https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username);
}
