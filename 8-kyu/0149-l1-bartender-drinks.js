// Link: https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function getDrinkByProfession(param) {
  const drink = param.toLowerCase();
  
  switch (drink) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}
