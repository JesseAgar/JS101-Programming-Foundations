/*
T xor T = F
T xor F = T
F xor T = T
F xor F = F
*/

function xor(input1, input2) {
  return !(input1 && input2) && (input1 || input2);
}

console.log(xor(true, true));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(false, false));