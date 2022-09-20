// Link: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
