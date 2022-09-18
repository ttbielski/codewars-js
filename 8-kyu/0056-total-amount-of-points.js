// Link: https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function points(games) {
  let totalPoints = 0;
  
  games.forEach(game => {
    if (game[0] === game[2]) {
      totalPoints += 1;
    } else if (game[0] > game[2]) {
      totalPoints += 3;
    }
  });
  
  return totalPoints;
}
