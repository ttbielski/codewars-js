// Link: https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}