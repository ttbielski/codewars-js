// Link: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

const humanYearsCatYearsDogYears = humanYears => {
  let [catYears, dogYears] = [15, 15];
  
  for (let i = 2; i <= humanYears; i++) {
    if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  
  return [humanYears, catYears, dogYears];
};
