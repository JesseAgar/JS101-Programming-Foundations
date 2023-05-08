const readline = require('readline-sync');

const ROUNDS_TO_WIN = 3;

const SCORECARD_LABEL = {
  round: "Round",
  userName: "You",
  CPUName: "CPU",
  lastUserMove: "lastUserMove",
  lastCPUMove: "lastCPUMove",
  lastWinner: "lastWinner",
  currentLeader: "leads",
  gameWinner: "winner"
};

const WINNING_LIST = {
  rock: {winsAgainst: ["lizard", "scissors"], shortHand: "(r)ock"},
  paper: {winsAgainst: ["rock", "spock"], shortHand: "(p)aper"},
  scissors: {winsAgainst: ["paper", "lizard"], shortHand: "(sc)issors"},
  lizard: {winsAgainst: ["paper", "spock"], shortHand: "(l)izard"},
  spock: {winsAgainst: ["scissors", "rock"], shortHand: "(sp)ock"}
};

const VALID_MOVES = Object.keys(WINNING_LIST);
const VALID_SHORTHAND = VALID_MOVES.map(key => WINNING_LIST[key].shortHand);
const VALID_INITIALS = VALID_SHORTHAND.map(key => key.slice(1,key.lastIndexOf(")")));

const LONGEST_VALID_LENGTH = Math.max(...VALID_MOVES.map(move => move.length));

const CHOICES_SPACE = LONGEST_VALID_LENGTH + 1;
const LABEL_SPACE = SCORECARD_LABEL["round"].length;
const CPU_NAME_ADJUST = SCORECARD_LABEL["CPUName"].length;
const SCORE_SPACE = 5 + LABEL_SPACE + CPU_NAME_ADJUST;
const USER_SPACE = LABEL_SPACE + CHOICES_SPACE;
const CPU_SPACE = USER_SPACE + 6 + LABEL_SPACE + CPU_NAME_ADJUST;

const MESSAGES = {
  askMove: "Please choose your move :",
  invalidMove: "That is an invalid move. Please choose again:",
  askReplay: "Would you like to play again? (y)es/(n)o",
  invalidReplay: "Invalid response. Would you like to play again? (y)es/(n)o",
  thankyou: "Thank you for playing with us.\n",
  welcome: "Welcome to the game.",
  start: `First to winning ${ROUNDS_TO_WIN} rounds wins the game.\n`
};

function prompt(message = '') {
  console.log(`===> ${message}`);
}

function getUserMove() {
  prompt(`${MESSAGES["askMove"]}`);
  prompt(`${VALID_SHORTHAND.join(", ")}`);
  let userMove = readline.question().toLowerCase();
  while (checkInvalidMove(userMove)) {
    prompt(`${MESSAGES["invalidMove"]}`);
    prompt(`${VALID_SHORTHAND.join(", ")}`);
    userMove = readline.question().toLowerCase();
  }
  return VALID_MOVES.filter(key => key.startsWith(userMove))[0];

  function checkInvalidMove(userMove) {
    const longNotationInvalid = !VALID_MOVES.includes(userMove);
    const shortNotationInvalid = !VALID_INITIALS.includes(userMove);
    return longNotationInvalid && shortNotationInvalid;
  }
}

function getCPUMove() {
  const randCPU = Math.floor(Math.random() * VALID_MOVES.length);
  return VALID_MOVES[randCPU];
}

function getWinner(userMove, CPUMove) {
  if (WINNING_LIST[userMove].winsAgainst.includes(CPUMove)) {
    return SCORECARD_LABEL["userName"];
  } else if (userMove === CPUMove) {
    return "tie";
  } else {
    return SCORECARD_LABEL["CPUName"];
  }
}

function displayWinner(scorecard) {
  const userMove = scorecard[SCORECARD_LABEL["lastUserMove"]];
  const CPUMove = scorecard[SCORECARD_LABEL["lastCPUMove"]];
  const winner = scorecard[SCORECARD_LABEL["lastWinner"]];
  const userName = SCORECARD_LABEL["userName"];
  const CPUName = SCORECARD_LABEL["CPUName"];
  const moveSpace = CHOICES_SPACE - userMove.length;
  prompt(`${userName} chose ${userMove}.${spaces(moveSpace)}${CPUName} chose ${CPUMove}.`);
  if (winner !== "tie") {
    prompt(`${winner} won the round!\n`);
  } else {
    prompt("It's a tie.\n");
  }
}

function askReplay() {
  prompt(`${MESSAGES["askReplay"]}`);
  let replay = readline.question();
  while (checkInvalidYesNo(replay)) {
    prompt(`${MESSAGES["invalidReplay"]}`);
    replay = readline.question();
  }
  return replay.toLowerCase()[0] === "y";

  function checkInvalidYesNo(replay) {
    return !["y", "yes", "n", "no"].includes(replay);
  }
}

function displayScore(leadStatus, scorecard) {
  const round = scorecard[SCORECARD_LABEL["round"]];
  const roundName = SCORECARD_LABEL["round"];
  const userScore = scorecard[SCORECARD_LABEL["userName"]];
  const CPUScore = scorecard[SCORECARD_LABEL["CPUName"]];
  const CPUName = SCORECARD_LABEL["CPUName"];
  const ROUND_SPACE = (round < 10) ? 9 : 8;

  prompt(`This is${spaces(LABEL_SPACE)}Your score${spaces(LABEL_SPACE)}${CPUName} score`);
  prompt(`${roundName} ${round}${spaces(ROUND_SPACE)}${userScore}${spaces(SCORE_SPACE)}${CPUScore}`);
  if (userScore > CPUScore) {
    prompt(`${spaces(USER_SPACE)}${leadStatus}\n`);
  } else if (userScore < CPUScore) {
    prompt(`${spaces(CPU_SPACE)}${leadStatus}\n`);
  } else {
    prompt("\n");
  }
}

function spaces(number) {
  return " ".repeat(number);
}

function getLeaderScore(scorecard) {
  let userScore = scorecard[SCORECARD_LABEL["userName"]];
  let CPUScore = scorecard[SCORECARD_LABEL["CPUName"]];
  return Math.max(userScore, CPUScore);
}

function sayBye() {
  console.clear();
  prompt(`${MESSAGES["thankyou"]}`);
}

function displayHeader(scorecard, leadStatus = SCORECARD_LABEL["currentLeader"]) {
  if (scorecard[SCORECARD_LABEL["round"]] === 1) {
    prompt(`${MESSAGES["welcome"]}`);
    prompt(`${MESSAGES["start"]}`);
    displayScore(leadStatus, scorecard);
  } else {
    displayWinner(scorecard);
    displayScore(leadStatus, scorecard);
  }
}

function makeScorecard() {
  const scorecard = {
    [SCORECARD_LABEL["round"]]: 1, [SCORECARD_LABEL["userName"]]: 0, [SCORECARD_LABEL["CPUName"]]: 0,
    [SCORECARD_LABEL["lastUserMove"]]: '',  [SCORECARD_LABEL["lastCPUMove"]]: '', [SCORECARD_LABEL["lastWinner"]]: ''
  };

  const incrementRound = function(count) {
    scorecard[SCORECARD_LABEL["round"]] += count;
  };

  const getScorecard = () => scorecard;

  const incrementWinner = function(winner) {
    scorecard[winner] += 1;
  };

  const updateLastMoves = function(userMove, CPUMove, winner) {
    scorecard[SCORECARD_LABEL["lastUserMove"]] = userMove;
    scorecard[SCORECARD_LABEL["lastCPUMove"]] = CPUMove;
    scorecard[SCORECARD_LABEL["lastWinner"]] = winner;
  };

  return [incrementRound, getScorecard, incrementWinner, updateLastMoves];
}

function announceVictor(victor) {
  prompt(`${victor} won the game!\n`);
}

function playRound() {
  showRules();
  const userMove = getUserMove();
  const CPUMove = getCPUMove();
  const winner = getWinner(userMove, CPUMove);
  return [userMove, CPUMove, winner];

  function showRules() {
    for (let winningMove in WINNING_LIST) {
      const losingMoves = WINNING_LIST[winningMove]["winsAgainst"];
      const spaceW = spaces(CHOICES_SPACE - winningMove.length);
      const spaceL = spaces(CHOICES_SPACE - losingMoves[0].length);
      prompt(`${winningMove}${spaceW}wins against ${losingMoves.join(`,${spaceL}`)}`);
    }
    console.log();
  }
}

//
do {
  const [incrementRound, getScorecard,
    incrementWinner, updateLastMoves] = makeScorecard();

  let leaderScore = 0;

  do {
    console.clear();

    displayHeader(getScorecard());

    const [userMove, CPUMove, winner] = playRound();

    incrementRound(1);
    incrementWinner(winner);
    updateLastMoves(userMove, CPUMove, winner);

    leaderScore = getLeaderScore(getScorecard());
  } while (leaderScore < ROUNDS_TO_WIN);

  console.clear();
  incrementRound(-1);
  displayHeader(getScorecard(), SCORECARD_LABEL["gameWinner"]);
  announceVictor(getScorecard()[[SCORECARD_LABEL["lastWinner"]]]);

} while (askReplay());
sayBye();