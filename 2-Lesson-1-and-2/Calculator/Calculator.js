let readlineSync = require('readline-sync');
let language = readlineSync.question(" => Language? en- English fr- French (default- English):  ");
let messages = require('./calculator-message.json');

function prompt(message) {
  return messages[language][message];
}

calculator();

// eslint-disable-next-line max-lines-per-function, max-statements
function calculator() {
  console.log(prompt('askNum1'));
  let firstNumber = readlineSync.question();
  while (invalidNumber(firstNumber)) {
    console.log(prompt('reAskNum1'));
    firstNumber = readlineSync.question();
  }

  console.log(prompt('askNum2'));
  let secondNumber = readlineSync.question();
  while (invalidNumber(secondNumber)) {
    console.log(prompt('reAskNum2'));
    secondNumber = readlineSync.question();
  }

  console.log(prompt('askOperation'));
  let operation = readlineSync.question();
  while (operation <= 0 || operation >= 5 || Number.isNaN(Number(operation))) {
    console.log(prompt('reAskOperation'));
    operation = readlineSync.question();
  }

  logResult(operation, +firstNumber, +secondNumber);

  let goAgain = readlineSync.question(prompt('goAgain'));
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

