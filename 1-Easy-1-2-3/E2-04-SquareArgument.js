const multiply = (num1, num2) => num1 * num2;

const square = (num1) => multiply(num1, num1);

function powerOf (num1, exponent) {
  if (exponent <= 0) {
    return 1;
  } else {
    return multiply(num1, powerOf(num1, exponent - 1));
  }
}

console.log(powerOf(100, 0));