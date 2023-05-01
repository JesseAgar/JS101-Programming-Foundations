let readlineSync = require("readline-sync");

function allOperations () {
  let num1 = readlineSync.question("First Number: ");
  let num2 = readlineSync.question("Second Number: ");
  num1 = +num1;
  num2 = +num2;
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  console.log(`${num1} × ${num2} = ${num1 * num2}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ^ ${num2} = ${BigInt(num1) ** BigInt(num2)}`);

}

allOperations();