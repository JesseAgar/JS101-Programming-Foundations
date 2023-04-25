const READLINESYNC = require('readline-sync');
const MESSAGES = require('./MLC-messages.json');
const INVALIDCHAR = require('./invalid-characters.json');

mortgageLoanCalculator();

function mortgageLoanCalculator() {
  let principle = getLoan();
  while (!isValidLoan(principle)) {
    console.log(MESSAGES.invalidLoan);
    principle = getLoan();
  }

  let apr = getAPR();
  while (!isValidAPR(apr)) {
    console.log(MESSAGES.invalidAPR);
    apr = getAPR();
  }
  apr /= 100;

  let duration = getDuration();
  while (!isValidDuration(duration)) {
    console.log(MESSAGES.invalidDuration);
    duration = getDuration();
  }

  console.log( `your monthly payment is $ ${calcMonthlyMortgageLoan(principle, apr, duration)}`);


}
function getLoan() {
  let dirtyLoan = READLINESYNC.question(MESSAGES.askLoan);
  return dirtyLoan.trim().split('').filter(x => !INVALIDCHAR.loan.includes(x)).join('');
}

function getAPR() {
  let  dirtyAPR = READLINESYNC.question(MESSAGES.askAPR);
  return dirtyAPR.trim().split('').filter(x => !INVALIDCHAR.APR.includes(x)).join('');
}

function getDuration() {
  let dirtyDuration = READLINESYNC.question(MESSAGES.askDuration);
  return dirtyDuration.trim().split('').filter(x => !INVALIDCHAR.duration.includes(x)).join('');
}

function isValidLoan(testLoan) {
  return testLoan >= 0;
}

function isValidAPR(testAPR) {
  return testAPR >= 0;
}

function isValidDuration(testDuration) {
  return testDuration >= 0;
}

function calcMonthlyMortgageLoan(loan, APR, months) {
  return (loan * (APR / (1 - ((1 + APR) ** (-months))))).toFixed(2);
}