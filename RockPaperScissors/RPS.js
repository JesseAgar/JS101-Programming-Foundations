const readlineSync = require('readline-sync');

const GAME_PARAMETERS = {
  ruleSet: 'C',
  maxPossibleWins: 4,
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
  endCompWin: "!!!!!!!!!!  THE COMPUTER WINS THE TOURNAMENT  !!!!!!!\n",
  endPlayerWin: "!!!!!!!!!!  YOU WIN THE TOURNAMENT  !!!!!!!!!\n",
  farewell: "Thanks! Please play again.\n",
  rulesTitle: "WHAT EACH OPTION CAN DEFEAT",
  selectOption: "Select your throw",
  playerScoreName: "You",
  compScoreName: "Computer",
  winsName: "Wins Needed",
};

const YES_OR_NO = {
  "n": false,
  "no": false,
  "y": true,
  "yes": true,
  "sure": true,
  "fine": true,
  "please never again": true,
};

const DEFAULT_RESPONSE_PREFIX = "     ";

startRPS();

function startRPS() {
  playTournament();

  while (wantsToPlayAgain()) {
    playTournament();
  }

  console.clear();
  print(RESPONSE.farewell);
}

function playTournament() {
  let scoreCounter = {
    winsNeeded: 1,
    playerWins: 0,
    compWins: 0,
  };

  console.clear();
  print(RESPONSE.welcome);
  scoreCounter.winsNeeded = getWinsLimit();

  console.clear();
  printRules();

  while (scoreCounter.playerWins < scoreCounter.winsNeeded &&
         scoreCounter.compWins < scoreCounter.winsNeeded) {
    playRound(scoreCounter);
  }
  wait(1000);
  printTournamentWinner(scoreCounter);
}

function getOptionsAndRules() {
  return RPS_RULE_SETS['ruleSet' + GAME_PARAMETERS.ruleSet];
}

function playRound(scoreCounter) {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice(Object.keys(getOptionsAndRules()));

  console.clear();
  printRules();
  print(`You played  ${userChoice.toUpperCase()}`);
  wait(50);
  print(`The computer played  ${computerChoice.toUpperCase()}\n`);
  wait(1000);
  printWinOrLose(userChoice, computerChoice);
  updateScoreCounter(userChoice, computerChoice, scoreCounter);
  printScore(scoreCounter);
}

function getWinsLimit() {
  print(RESPONSE.askNumGames);
  let numWins = Number(readlineSync.prompt());
  while (isNaN(numWins) || numWins < 1 ||
         numWins > GAME_PARAMETERS.maxPossibleWins) {
    print(RESPONSE.invalidChoice);
    print(RESPONSE.askNumGames);
    numWins = Number(readlineSync.prompt());
  }

  return numWins;
}

function getUserChoice() {
  print(printAskToChoose());
  let choice = readlineSync.prompt().trim().toLowerCase();

  if (isInvalidChoice(choice)) {
    print(RESPONSE.invalidChoice);
    choice = getUserChoice();
  }

  if (Object.keys(ABBR_OPTIONS).includes(choice)) return ABBR_OPTIONS[choice];

  return choice;
}

function isInvalidChoice(choice) {
  return (!Object.keys(getOptionsAndRules()).includes(choice) &&
  !Object.keys(ABBR_OPTIONS).includes(choice)) ||
  (!Object.keys(getOptionsAndRules()).includes(ABBR_OPTIONS[choice]) &&
  !Object.keys(getOptionsAndRules()).includes(choice));
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
  print(RESPONSE.askPlayAgain);
  let again = readlineSync.prompt().trim().toLowerCase();
  while (!Object.keys(YES_OR_NO).includes(again)) {
    print(RESPONSE.invalidChoice);
    print(RESPONSE.askPlayAgain);
    again = readlineSync.prompt().trim().toLowerCase();
  }

  return YES_OR_NO[again];
}

function printAskToChoose() {
  let optionsAndAbbreviations = [];
  pushOptionsAndAbbreviations(optionsAndAbbreviations);
  return RESPONSE.selectOption + ':\n' + optionsAndAbbreviations.join('') + '\n';
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
  rules.push('');

  console.log(rules.join('\n'));
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
  let timerDone = false;
  while (!timerDone) {
    let currentTime = new Date().getTime();
    let timeElapsed = currentTime - startTime;
    if (timeElapsed >= timeLimitMilliseconds) {
      timerDone = true;
    }
  }
}
