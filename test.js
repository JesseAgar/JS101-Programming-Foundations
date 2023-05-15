
const readlineSync = require('readline-sync');

getUserChoice(4);

function getUserChoice(maxRecursions) {
  let choice = readlineSync.question("Rock, Paper, or Scissors?");

  if (maxRecursions <= 0) {
    console.log("Too many invalid choices, we're going to assume you wanted rock");
    choice = rock;
  } else if (true) {
    console.log("Invalid Choice");
    choice = getUserChoice(--maxRecursions); 
  } 

  return choice;
}



