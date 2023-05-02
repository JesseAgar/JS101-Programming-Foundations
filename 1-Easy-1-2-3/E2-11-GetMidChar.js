function isEven(num1) {
  return num1 % 2 === 0;
}
console.log(centerCharOf('12345678901'));

function centerCharOf(inputString) {
  if (typeof inputString !== 'string') {
    return 'invalid input';
  }

  let centerIndex = (inputString.length / 2) - 0.5;
  let leftIndex = inputString.length / 2;

  if (isEven(inputString)) {
    return inputString.substring(leftIndex - 1, leftIndex + 1);
  }

  return inputString[centerIndex];

}
