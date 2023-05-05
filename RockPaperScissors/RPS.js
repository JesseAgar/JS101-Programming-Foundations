const readlineSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const RESPONSES = {
  welcome: "Let's play Rock, Paper, Scissors!",
  askToChoose: "Please choose 'rock', 'paper', or 'scissors'",
  invalidChoice: "That is not a valid choice.",
  tie: "It's a tie!",
  win: "You win!",
  lose: "You lose!",
  revealChoices(userChoice, computerChoice) {
    return `You played ${userChoice}, the computer played ${computerChoice}`;
  },
  playAgain: "Would you like to play again? (y/n)",
};

// rockPaperScissors();

function rockPaperScissors() {
  print(RESPONSES.welcome);

  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice(VALID_CHOICES);

  print(RESPONSES.revealChoices(userChoice, computerChoice));
  printGameResult(userChoice, computerChoice);

  playAgain();
}

function print(stringToPrint) {
  console.log(" => " + stringToPrint);
}

function getUserChoice() {
  print(RESPONSES.askToChoose);
  let choice = readlineSync.prompt().trim().toLocaleLowerCase();
  if (!VALID_CHOICES.includes(choice)) {
    print(RESPONSES.invalidChoice);
    choice = getUserChoice();
  }
  return choice;
}

function getComputerChoice(validChoices) {
  return validChoices[Math.floor(Math.random() * validChoices.length)];
}

function printGameResult(userPlay, compPlay) {
  if (userPlay === compPlay) {
    print(RESPONSES.tie);
  } else if ((userPlay === 'rock' && compPlay === 'scissors') ||
             (userPlay === 'scissors' && compPlay === 'paper') ||
             (userPlay === 'paper' && compPlay === 'rock')) {
    print(RESPONSES.win);
  } else {
    print(RESPONSES.lose);
  }
}

function playAgain() {
  print(RESPONSES.playAgain);
  let again = readlineSync.prompt().trim().toLowerCase();
  if (again === 'y') {
    rockPaperScissors();
  }
}
