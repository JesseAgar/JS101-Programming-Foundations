let readlineSync = require('readline-sync');
let language = readlineSync.question(" => Language? en- English fr- French (default- English):  ");
let calculatorMessage = require('./calculator-message.json');
let messages = calculatorMessage.en;
switch (language) {
  case "en": 
    messages = calculatorMessage.en;
    break;
  case "fr":
    messages = calculatorMessage.fr;
    break;
}


calculator();

// eslint-disable-next-line max-lines-per-function, max-statements
function calculator() {
  console.log(messages.askNum1);
  let firstNumber = readlineSync.question();
  while (invalidNumber(firstNumber)) {
    console.log(messages.reAskNum1);
    firstNumber = readlineSync.question();
  }

  console.log(messages.askNum2);
  let secondNumber = readlineSync.question();
  while (invalidNumber(secondNumber)) {
    console.log(messages.reAskNum2);
    secondNumber = readlineSync.question();
  }

  console.log(messages.reAskOperation);
  let operation = readlineSync.question();
  while (operation <= 0 || operation >= 5 || Number.isNaN(Number(operation))) {
    console.log(messages.reAskOperation);
    operation = readlineSync.question();
  }

  logResult(operation, +firstNumber, +secondNumber);

  let goAgain = readlineSync.question(messages.goAgain);
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