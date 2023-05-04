// * INPUTS
// ? - positive and negative numbers
// * OUTPUTS
// ? - negative numbers
// * RULES AND REQUIREMENTS
// ? -
// * MENTAL MODEL
// ? - if negative return negative, if positive, multiply by -1

function negative(input) {
  return Math.abs(input) * -1;
}

console.log(negative(-1));
console.log(negative(1));