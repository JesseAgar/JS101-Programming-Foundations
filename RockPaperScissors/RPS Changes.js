// Great call! The second I turned this:
function isInvalidChoice(choice) {
  return (!Object.keys(getOptionsAndRules()).includes(choice) &&
  !Object.keys(ABBR_OPTIONS).includes(choice)) ||
  (!Object.keys(getOptionsAndRules()).includes(ABBR_OPTIONS[choice]) &&
  !Object.keys(getOptionsAndRules()).includes(choice));
}
// Into this:
function isInvalidChoice(choice) {
  return ((isInvalidOption(choice) && isInvalidAbbr(choice)) ||
  (abbrIsNotInRuleSet(choice) && isInvalidOption(choice));
}
// I was able to see that it was still complicated. So I made it:
function isInvalidChoice(choice) {
  return (isInvalidOption(choice) &&
  (isInvalidAbbr(choice) || abbrIsNotInRuleSet(choice)))
}
// Which is much better I think.

// Are there any guidelines about which of these is generally better? 
`isInvalidChoice(choice)` vs `!isValidChoice(choice)`
// If I ever want to flip the invalid for whatever reason, this `!isInvalidChoice(choice)` seems silly lol




// Oh, I wasn't aware of that possible problem. Maybe I should have just used a while loop there.
// But you're saying instead of something like this:
function getUserChoice() {
  let choice = readlineSync.question("Rock, Paper, or Scissors?");
  # highlight
  if (isInvalidChoice(choice)) {
    choice = getUserChoice(); 
  }
  # endhighlight
  return choice;
}
// Do something like this?:
function getUserChoice(maxRecursions) {
  let choice = readlineSync.question("Rock, Paper, or Scissors?");
  # highlight
  if (maxRecursions <= 0) {
    console.log("Sounds like you want to play rock");
    choice = 'rock';
  } else if (isInvalidChoice(choice)) {
    console.log("Invalid Choice");
    choice = getUserChoice(--maxRecursions); 
  } 
  # endhighlight
  return choice;
}


// I've been trying things out but don't quite understand the problem. Is the problem that I have `playRound(scoreCard)` that changes the score card but it's not obvious it should?
// So something with sort of logic would be better?:
function startTournament() {
  const winsNeeded = getWinsLimit();

  let winner = playTournament(winsNeeded);

  printTournamentWinner(winner);
}

function playTournament(winLimit) {
  let scoreCard = {
    compWins: 0,
    playerWins = 0,
  }

  while (nobodysWonYet(scoreCard)) {
    # highlight
    let roundResults = playRound();

    getUpdatedScoreCard(roundResults.winner)
    # endhighlight
    printResult(roundResults.thePlays);
    printScore(scoreCard);
  }

  return theWinner(scoreCard, winLimit)
}
// or is object mutation bad sometimes? and I should reassign the variable like: `scoreCard = getUpdatedScoreCard(scoreCard)`
function playTournament() {
  scoreCard = getUpdatedScoreCard(scoreCard, results);
}

function getUpdatedScoreCard(score, results) {
  if (results.winner == 'player') score.player += 1;
  if (results.winner == 'computer') score.comp += 1;
  return score;
}