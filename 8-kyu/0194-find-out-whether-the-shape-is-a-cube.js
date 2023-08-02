// Link: https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

var cubeChecker = function(volume, side){
  if (volume <= 0 || side <= 0) return false;
  return volume === side ** 3;
};
