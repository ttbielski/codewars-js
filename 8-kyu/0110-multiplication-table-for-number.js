// Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function multiTable(number) {
  let table = '';
  
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
  }
  
  return table;
}
