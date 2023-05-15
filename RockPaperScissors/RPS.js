const readlineSync = require('readline-sync');

const GAME_PARAMETERS = {
  ruleSet: 'A',
  maxPossibleWins: 10,
  ruleBoxPadding: 3,
};

const RPS_RULE_SETS = {
  ruleSetA: {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper'],
  },

  ruleSetB: {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock: ['scissors', 'rock'],
    lizard: ['paper', 'spock'],
  },

  ruleSetC: {
    'rock': ['scissors', 'lizard', 'wet noodle'],
    'paper': ['rock', 'spock', 'wet noodle'],
    'scissors': ['paper', 'lizard', 'wet noodle'],
    'spock': ['scissors', 'rock', 'wet noodle'],
    'lizard': ['paper', 'spock', 'wet noodle'],
    'dynamite': ['rock', 'paper', 'scissors', 'lizard', 'spock',
      'wet noodle'],
    'wet noodle': ['(nothing)'],
    'puppy': ['spock', 'wet noodle']
  },
};

const ABBR_OPTIONS = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  o: 'spock',
  l: 'lizard',
  liz: 'lizard',
  d: 'dynamite',
  sc: 'scissors',
  sp: 'spock',
  w: 'wet noodle',
  u: 'puppy',
  pu: 'puppy',
  pup: 'puppy',
  pa: 'paper',
};

const RESPONSE = {
  welcome: "Let's play Rock, Paper, Scissors! \n",
  invalidChoice: "\n<< INVALID CHOICE >>\n",
  onTie: "IT'S A DRAW! (you both played the same option)\n",
  onWin: "YOU WIN!\n",
  onLose: "YOU LOSE!\n",
  onNonWin: "IT'S A STALEMATE... nobody's choice beats the other's \n",
  separator: "\n----------------------\n",
  askPlayAgain: "Would you like to play again?\n",
  askNumGames: `How many wins do you want to play till? (between 1 and ${GAME_PARAMETERS.maxPossibleWins})\n`,
  endCompWin: "!!!!!!!!!!  THE COMPUTER WINS THE TOURNAMENT  !!!!!!!!!!\n",
  endPlayerWin: "!!!!!!!!!!  YOU WIN THE TOURNAMENT  !!!!!!!!!!\n",
  farewell: "Thanks! Please play again.\n",
  rulesTitle: "WHAT EACH OPTION CAN DEFEAT",
  selectOption: "Select your throw",
  playerScoreName: "You",
  compScoreName: "Computer",
  winsName: "Wins Needed",
  exitInstructions: "(type 'quit' to quit)",
};

const YES_OR_NO = {
  "n": false,
  "no": false,
  "quit": false,
  "y": true,
  "yes": true,
  "sure": true,
  "fine": true,
  "please never again": true,
};

const DEFAULT_RESPONSE_PREFIX = "     ";

startRPS();

function startRPS() {
  while (true) {
    playTournament();
    if (!wantsToPlayAgain()) break;
  }

  quit();
}

function playTournament() {
  let scoreCounter = {
    playerWins: 0,
    compWins: 0,
  };

  console.clear();
  print(RESPONSE.welcome);
  scoreCounter.winsNeeded = getWinsLimit();

  console.clear();
  printRules();

  while (true) {
    playRound(scoreCounter);
    if (someoneWon(scoreCounter.playerWins, scoreCounter.compWins,
      scoreCounter.winsNeeded)) break;
  }

  wait(1000);
  printTournamentWinner(scoreCounter);
}

function someoneWon(playerAScore, playerBScore, winsNeeded) {
  return playerAScore >= winsNeeded || playerBScore >= winsNeeded;
}

function getOptionsAndRules() {
  return RPS_RULE_SETS['ruleSet' + GAME_PARAMETERS.ruleSet.toUpperCase()];
}

function playRound(scoreCounter) {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice(Object.keys(getOptionsAndRules()));

  console.clear();
  printRules();
  print(`You played  ${userChoice.toUpperCase()}`);
  wait(700);
  print(`The computer played  ${computerChoice.toUpperCase()}\n`);
  processingAnimation();
  printWinOrLose(userChoice, computerChoice);
  updateScoreCounter(userChoice, computerChoice, scoreCounter);
  printScore(scoreCounter);
}

function getWinsLimit() {
  while (true) {
    print(RESPONSE.askNumGames);
    let numWins = Number(readlineSync.prompt());
    if (validWinLimit(numWins)) return numWins;
    print(RESPONSE.invalidChoice);
  }
}

function validWinLimit(winLimit) {
  return ((!isNaN(winLimit)) && (winLimit >= 1) &&
          (winLimit <= GAME_PARAMETERS.maxPossibleWins));
}

function getUserChoice() {
  while (true) {
    printAskToChoose();
    let choice = readlineSync.prompt().trim().toLowerCase();

    if (choice.trim().toLowerCase() === 'quit') quit();

    if (isInvalidChoice(choice)) {
      print(RESPONSE.invalidChoice);
      continue;
    }

    if (Object.keys(ABBR_OPTIONS).includes(choice)) {
      return ABBR_OPTIONS[choice];
    } else {
      return choice;
    }
  }

}

function isInvalidChoice(choice) {
  return (isInvalidOption(choice) &&
  (isInvalidAbbr(choice) || abbrIsNotInRuleSet(choice)));
}

function isInvalidOption(userInput) {
  return !Object.keys(getOptionsAndRules()).includes(userInput);
}
function isInvalidAbbr(userInput) {
  return !Object.keys(ABBR_OPTIONS).includes(userInput);
}
function abbrIsNotInRuleSet(userInput) {
  return !Object.keys(getOptionsAndRules()).includes(ABBR_OPTIONS[userInput]);
}

function getComputerChoice(validChoices) {
  return validChoices[Math.floor(Math.random() * validChoices.length)];
}

function printWinOrLose(userPlay, compPlay) {
  if (userPlay === compPlay) {
    print(RESPONSE.onTie);
  } else if (theyWonAgainst(compPlay, userPlay)) {
    print(RESPONSE.onLose);
  } else if (theyWonAgainst(userPlay, compPlay)) {
    print(RESPONSE.onWin);
  } else {
    print(RESPONSE.onNonWin);
  }
}

function updateScoreCounter(userPlay, compPlay, score) {
  if (userPlay === compPlay) {
    return;
  }

  if (theyWonAgainst(userPlay, compPlay)) {
    score.playerWins += 1;
  } else if (theyWonAgainst(compPlay, userPlay)) {
    score.compWins += 1;
  }
}

function theyWonAgainst(play1, play2) {
  return getOptionsAndRules()[play1].includes(play2);
}

function wantsToPlayAgain() {
  while (true) {
    print(RESPONSE.askPlayAgain);
    let again = readlineSync.prompt().trim().toLowerCase();
    if (Object.keys(YES_OR_NO).includes(again)) return YES_OR_NO[again];
    print(RESPONSE.invalidChoice);
  }
}

function printAskToChoose() {
  let optionsAndAbbreviations = [];
  pushOptionsAndAbbreviations(optionsAndAbbreviations);
  print(RESPONSE.selectOption + ':\n' + optionsAndAbbreviations.join(''));
  print(RESPONSE.exitInstructions);
  print('');
}

function printScore(score) {
  print('--SCORE--');
  print(`${RESPONSE.playerScoreName}: ${score.playerWins}`);
  print(`${RESPONSE.compScoreName}: ${score.compWins}`);
  print('');
  print(`(first to ${score.winsNeeded})`);
  console.log(RESPONSE.separator);
}

function printTournamentWinner(score) {
  if (score.compWins === score.winsNeeded) {
    print(RESPONSE.endCompWin);
  }

  if (score.playerWins === score.winsNeeded) {
    print(RESPONSE.endPlayerWin);
  }
}

function printRules() {
  let boxPadding = GAME_PARAMETERS.ruleBoxPadding;
  let rules = [];

  rules.push(RESPONSE.rulesTitle);
  pushOptionsAndConditions(rules);

  let longestLine = getLongestLength(rules);

  addPaddingToElements(rules, longestLine, boxPadding);
  pushBoxTopAndBottom(rules, longestLine, boxPadding);

  console.log(rules.join('\n'));

  console.log('\n');
}

function pushOptionsAndConditions(rules) {
  for (let validChoice in getOptionsAndRules()) {
    rules.push(validChoice + '   >>   ' + getOptionsAndRules()[validChoice].join(' | '));
    rules.push('');
  }
}

function addPaddingToElements(array, goalLength, padding) {
  for (let index = 0; index < array.length; index++) {
    array[index] = '|' + createSpaces(padding) + array[index] +
                   createSpaces(padding + goalLength - array[index].length) + '|';
  }
}

function pushBoxTopAndBottom(array, length, padding) {
  array.unshift(createDashes(length + (2 * padding) + 2));
  array.push(createDashes(length + (2 * padding) + 2));
}

function print(stringToPrint) {
  console.log(DEFAULT_RESPONSE_PREFIX + stringToPrint);
}

function pushOptionsAndAbbreviations(messageArray) {
  for (let validChoice of Object.keys(getOptionsAndRules())) {
    messageArray.push('\n');
    messageArray.push(DEFAULT_RESPONSE_PREFIX + `'${validChoice}'`);

    let hasAnAbbreviation = Object.values(ABBR_OPTIONS).includes(validChoice);
    if (hasAnAbbreviation) {
      messageArray.push(' (');
      let abbreviations = [];
      for (let key in ABBR_OPTIONS) {
        if (ABBR_OPTIONS[key] === validChoice) {
          abbreviations.push("'" + key + "'");
        }
      }
      messageArray.push(abbreviations.join(', '));
      messageArray.push(')');
    }
  }
}

function createSpaces(numberOfSpaces) {
  let spaces = [];
  for (let spaceCount = 0; spaceCount < numberOfSpaces; spaceCount++) {
    spaces.push(' ');
  }
  return spaces.join('');
}

function createDashes(numberOfDashes) {
  let padding = [];
  for (let dashCount = 0; dashCount < numberOfDashes; dashCount++) {
    padding.push('-');
  }
  return padding.join('');
}

function getLongestLength(array) {
  let longestElement = 0;
  for (let element of array) {
    if (element.length > longestElement) longestElement = element.length;
  }
  return longestElement;
}

function wait(timeLimitMilliseconds) {
  let startTime = new Date().getTime();
  while (true) {
    let currentTime = new Date().getTime();
    let timeElapsed = currentTime - startTime;
    if (timeElapsed >= timeLimitMilliseconds) break;
  }
}

function quit() {
  console.clear();
  print(RESPONSE.farewell);
  process.exit();
}

function processingAnimation() {
  wait(700);
  print('...');
  wait(700);
  print('');
}