const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];
const NUMBER_OF_ROUNDS = 5;
const ROUNDS_TO_WIN = 3;
const WINNING_COMBINATIONS = {
  rock: ["lizard", "scissors"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function parseShortCut(input) {
  switch (input) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "sc":
      return "scissors";
    case "l":
      return "lizard";
    case "sp":
      return "spock";
    default:
      return input;
  }
}

function sanitizeInput(input) {
  return parseShortCut(
    input.replaceAll(" ", "").replace(".", "").toLowerCase()
  );
}
function isInvalidInput(input) {
  return !VALID_CHOICES.includes(input) || input.trim() === "";
}

function getUserChoice(message) {
  prompt(message);
  let choice = sanitizeInput(readline.question());

  while (isInvalidInput(choice)) {
    prompt("That's not a valid choice. Try again!");
    choice = sanitizeInput(readline.question());
  }

  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function didUserWin(choice, computerChoice) {
  return WINNING_COMBINATIONS[choice].includes(computerChoice);
}

function determineWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return "tie";
  }
  if (didUserWin(choice, computerChoice)) {
    return "userWins";
  }

  return "computerWins";
}

function displayWinner(result, choice) {
  if (result === "tie") {
    prompt(`Since you both picked ${choice}, it's a tie!\n`);
    return;
  }
  if (result === "userWins") {
    prompt("You win!\n");
    return;
  }

  prompt("The computer wins this round!\n");
}

function updateScores(result, scores) {
  if (result === "tie") {
    return { userScore: scores.userScore, computerScore: scores.computerScore };
  }
  if (result === "userWins") {
    return {
      userScore: scores.userScore + 1,
      computerScore: scores.computerScore,
    };
  }

  return {
    userScore: scores.userScore,
    computerScore: scores.computerScore + 1,
  };
}

function isValidYesNoResponse(answer) {
  return (
    answer === "y" || answer === "yes" || answer === "n" || answer === "no"
  );
}

function playAgain() {
  prompt("Would you like to play again? (y/n)");
  let answer = sanitizeInput(readline.question());
  console.clear();

  while (!isValidYesNoResponse(answer)) {
    prompt("Please type in a valid yes/no answer.");
    answer = sanitizeInput(readline.question());
  }

  return answer === "y" || answer === "yes";
}

function oneRound(scores) {
  let choice = getUserChoice(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let computerChoice = getComputerChoice();

  prompt(`You chose ${choice}. The computer chose ${computerChoice}.`);

  const result = determineWinner(choice, computerChoice);
  displayWinner(result, choice);
  return updateScores(result, scores);
}

function shouldGameContinue(gameCount, scores) {
  return (
    gameCount < NUMBER_OF_ROUNDS &&
    scores.userScore < ROUNDS_TO_WIN &&
    scores.computerScore < ROUNDS_TO_WIN
  );
}

function promptToContinue(gameCount, scores) {
  if (shouldGameContinue(gameCount, scores)) {
    prompt("Hit a key to continue.");
    readline.question();
    console.clear();
  }
}

function displayCurrentScore(scores) {
  prompt(
    `The current score is: ${scores.userScore} for you, ${scores.computerScore} for the computer.\n`
  );
}

function playGame() {
  let gameCount = 0;
  const initialScores = { userScore: 0, computerScore: 0 };
  let updatedScores = initialScores;
  while (true) {
    updatedScores = oneRound(updatedScores);
    displayCurrentScore(updatedScores);
    gameCount += 1;
    promptToContinue(gameCount, updatedScores);
    if (!shouldGameContinue(gameCount, updatedScores)) {
      return updatedScores;
    }
  }
}

function reportGameOutcome(scores) {
  if (scores.userScore > scores.computerScore) {
    prompt("Congratulations! You win the game!");
    return;
  }
  if (scores.computerScore > scores.userScore) {
    prompt("Oh no, the computer beat you this time!");
    return;
  }

  prompt("It's a tie overall!");
}

//Start of the interaction

console.clear();
prompt(
  "Hey there, let's play a game!\n   " +
  "The rules are simple, whoever wins the most out of 5 rounds, wins the game!"
);

while (true) {
  const updatedScores = playGame();
  reportGameOutcome(updatedScores);
  if (!playAgain()) break;
}

console.clear();