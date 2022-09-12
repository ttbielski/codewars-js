// Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function abbrevName(name){
  const arrayName = name.split(' ');
  return `${arrayName[0][0]}.${arrayName[1][0]}`.toUpperCase();
}
