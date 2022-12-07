// Link: https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

// SOLUTION ///////////////////////////////////////////////////////////////////

function calculator(a, b, sign) {
  const isValidNumberA = /^[0-9]+$/.test(a);
  const isValidNumberB = /^[0-9]+$/.test(b);
  const isValidSign = /[+\-*/]/g.test(sign);
  
  if (isValidNumberA && isValidNumberB && isValidSign) {
    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  } else {
    return 'unknown value';
  }
}
