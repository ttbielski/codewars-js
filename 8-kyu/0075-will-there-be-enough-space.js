// Link: https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function enough(cap, on, wait) {
  const freeSeats = cap - on;
  
  return freeSeats >= wait ? 0 : wait - freeSeats;
}
