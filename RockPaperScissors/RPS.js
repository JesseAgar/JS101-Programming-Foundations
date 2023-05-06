const readlineSync = require('readline-sync');

const VALID_CHOICES_WINNABLES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['paper', 'spock'],
  dynamite: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
};

const ABBR_OPTIONS = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  o: 'spock',
  l: 'lizard',
  liz: 'lizard',
  d: 'dynamite',
};

let winsNeeded = 1;
let playerWins = 0;
let compWins = 0;

const RESPONSES = {
  welcome: "Let's play Rock, Paper, Scissors!",
  askToChoose() {
    let askToChooseMessage = [];
    pushOptionsAndAbbr(askToChooseMessage);
    return "Please choose:" + askToChooseMessage.join('');
  },
  invalidChoice: "That is not a valid choice.",
  tie: "It's a tie!",
  win: "You win!",
  lose: "You lose!",
  separator: "----------------------",
  revealChoices(userChoice, computerChoice) {
    return `You played ${userChoice}, the computer played ${computerChoice}`;
  },
  playAgain: "Would you like to play again? (y/n)",
  askNumGames: "How many wins do you want to play till? (between 1 and 10)",
  endGameCompWin: "THE COMPUTER WINS THE TOURNAMENT!!!!!!!",
  endGamePlayerWin: "YOU WIN THE TOURNAMENT!!!!!!!!!",
};

startRPS();

function startRPS() {
  print(RESPONSES.welcome);

  gameLoop();
}

function gameLoop() {
  winsNeeded = getNumberOfGames();

  while (playerWins < winsNeeded && compWins < winsNeeded) {
    rockPaperScissors();
  }

  if (compWins === winsNeeded) {
    print(RESPONSES.endGameCompWin);
  }

  if (playerWins === winsNeeded) {
    print(RESPONSES.endGamePlayerWin);
  }

  playAgain();
}

function rockPaperScissors() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice(Object.keys(VALID_CHOICES_WINNABLES));

  print(RESPONSES.revealChoices(userChoice, computerChoice));
  updateScore(userChoice, computerChoice);
  printGameResult(userChoice, computerChoice);
}

function print(stringToPrint) {
  console.log("   => " + stringToPrint);
}

function getNumberOfGames() {
  print(RESPONSES.askNumGames);
  let numWins = Number(readlineSync.prompt());
  while (isNAN(numWins) || numWins < 1 || numWins > 10) {
    print(RESPONSES.invalidChoice);
    print(RESPONSES.askNumGames);
    numWins = Number(readlineSync.prompt());
  }

  return numWins;
}

function getUserChoice() {
  print(RESPONSES.askToChoose());
  let choice = readlineSync.prompt().trim().toLocaleLowerCase();

  if (!Object.keys(VALID_CHOICES_WINNABLES).includes(choice) &&
      !Object.keys(ABBR_OPTIONS).includes(choice)) {
    print(RESPONSES.invalidChoice);
    choice = getUserChoice();
  }

  if (Object.keys(ABBR_OPTIONS).includes(choice)) return ABBR_OPTIONS[choice];

  return choice;
}

function isNAN(input) {
  return input !== input;
}

function getComputerChoice(validChoices) {
  return validChoices[Math.floor(Math.random() * validChoices.length)];
}

function printGameResult(userPlay, compPlay) {
  if (userPlay === compPlay) {
    print(RESPONSES.tie);
    print(`You:${playerWins} Computer:${compWins} Wins Needed: ${winsNeeded}`);
    console.log(RESPONSES.separator);
  } else if (userWinConditions(userPlay, compPlay)) {
    print(RESPONSES.win);
    print(`You:${playerWins} Computer:${compWins} Wins Needed: ${winsNeeded}`);
    console.log(RESPONSES.separator);
  } else {
    print(RESPONSES.lose);
    print(`You:${playerWins} Computer:${compWins} Wins Needed: ${winsNeeded}`);
    console.log(RESPONSES.separator);
  }
}

function userWinConditions(userPlay, compPlay) {
  return VALID_CHOICES_WINNABLES[userPlay].includes(compPlay);
}

function updateScore(userPlay, compPlay) {
  if (userPlay === compPlay) {
    return;
  } else if (VALID_CHOICES_WINNABLES[userPlay].includes(compPlay)) {
    playerWins += 1;
  } else {
    compWins += 1;
  }
}

function playAgain() {
  print(RESPONSES.playAgain);
  let again = readlineSync.prompt().trim().toLowerCase();
  if (again === 'y') {
    playerWins = 0;
    compWins = 0;
    winsNeeded = 1;
    gameLoop();
  }
}

function pushOptionsAndAbbr(message) {
  for (let validChoice of Object.keys(VALID_CHOICES_WINNABLES)) {
    message.push('\n');
    message.push(`   => '${validChoice}'`);
    let firstAbbrOption = true;
    pushAbbr(message, firstAbbrOption, validChoice);
  }
}

function pushAbbr(message, firstAbbrCheck, validChoice) {
  if (Object.values(ABBR_OPTIONS).includes(validChoice)) {
    message.push(' (');

    for (let key in ABBR_OPTIONS) {
      if (ABBR_OPTIONS[key] === validChoice) {
        if (firstAbbrCheck === true) {
          firstAbbrCheck = false;
          message.push(`'${key}'`);
        } else {
          message.push(`, '${key}'`);
        }
      }
    }

    message.push(')');
  }
}