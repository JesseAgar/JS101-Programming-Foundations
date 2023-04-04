let readlineSync = require('readline-sync');

calculator();

// eslint-disable-next-line max-lines-per-function, max-statements
function calculator() {
  console.log("=> First Number:");
  let firstNumber = readlineSync.question();
  while (invalidNumber(firstNumber)) {
    console.log("=> Invalid input. First Number:");
    firstNumber = readlineSync.question();
  }

  console.log("=> Second Number:");
  let secondNumber = readlineSync.question();
  while (invalidNumber(secondNumber)) {
    console.log("=> Invalid input. Second Number:");
    secondNumber = readlineSync.question();
  }

  console.log("=> Operation ( 1 = addition, 2 = subtraction, 3 = division, 4 = multiplication):");
  let operation = readlineSync.question();
  while (operation <= 0 || operation >= 5 || Number.isNaN(Number(operation))) {
    console.log("=> Invalid input. Operation ( 1 = addition, 2 = subtraction, 3 = division, 4 = multiplication):");
    operation = readlineSync.question();
  }

  logResult(operation, +firstNumber, +secondNumber);

  let goAgain = readlineSync.question("=> Go again? 1-Yes 2-No: ");
  if (goAgain == '1') calculator();

}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

function sum(numA, numB) {
  return numA + numB;
}

function subtract(numA, numB) {
  return numA - numB;
}

function divide(numA, numB) {
  return numA / numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

function logResult(operator, num1, num2) {
  switch (operator) {
    case '1':
      console.log(sum(num1, num2));
      break;
    case '2':
      console.log(subtract(num1, num2));
      break;
    case '3':
      console.log(divide(num1, num2));
      break;
    case '4':
      console.log(multiply(num1, num2));
      break;
  }
}