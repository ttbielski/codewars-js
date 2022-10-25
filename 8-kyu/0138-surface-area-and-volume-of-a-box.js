// Link: https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getSize(width, height, depth) {
  const area = (2 * depth * width) + (2 * depth * height) + (2 * height * width);
  const volume = width * height * depth;
  
  return [area, volume];
}
