// Link: https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function well(x) {
  const goodIdeas = x.filter(idea => idea === 'good').length;
  
  if (goodIdeas > 2) {
    return 'I smell a series!';
  } else if (goodIdeas > 0) {
    return 'Publish!';
  } else {
    return 'Fail!';
  }
}
