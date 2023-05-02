//  UNDERSTAND THE PROBLEM
// * UNDERSTAND
//   - read the problem description 
//   - examine all examples
//   - ask clarifying questions
// * INPUTS
// ? - User will input their age and their age they want to retire
// * OUTPUTS
// ? - the current year and then the year of their desired retirement
// * RULES AND REQUIREMENTS
// ? - Exclude negative numbers
// * MENTAL MODEL
// ? - Ask user for age and date of desired retirement.
// * EXAMPLES/TEST CASES
//   - understand how the input translates to output
//   - identify edge cases
//   - create the test cases and confirm outputs
// * VALID CASES  */
// ? positive numbers for inputs
// * EDGE CASES
// ? negative numbers for inputs and non numbers should be dissallowed
// ? age of retirement less than current age
// * DATA STRUCTURES
//   - what sort of actions do you have to do (sort, collect, filter, etc.)
//   - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
//   - this helps you to focus on methods for these types
// ? - Date Object to just get the current year
// ? - numbers and strings
// * ALGORITHM
//   - step by step process that takes you from input to output
//   - handles edges cases and valid example inputs
//   - your code will depend on your algorithm
// ? - ask for input, if negative, re ask for input
// ? - subtract retirement age from current age
// ? - return retirement year and number of years remaining of work
// * CODE
//   - time to write the code!
//   - use everything you've gathered in your pedac to write the code 
//   Debug (if needed)
//   - if there are errors in output, don't panic!
//   - carefully review algorithm before looking at your code
//   - once you've identified the issue, change the algorithm first, then fix the code
//   - try again!
let readlineSync = require('readline-sync');

retirementAge();

function isNegative(num1) {
  return Math.sign(num1) === -1 ? true : false;
}

function retirementAge() {
  let age = +readlineSync.question('How old are you? => ');
  while (isNegative(age) || age > 120) {
    age = readlineSync.question('How old are you really? => ');
  }

  let desiredRetireAge = +readlineSync.question('At what age would you like to retire? => ');

  if (desiredRetireAge < age) {
    console.log('You wish you were already retired :( ');
    return;
  }

  let currentDate = new Date()
  let currentYear = currentDate.getFullYear();
  let yearsToRetire = desiredRetireAge - age;
  let retireYear = currentYear + yearsToRetire;

  console.log(`It's ${currentYear}. You will retire in ${yearsToRetire} years in the year ${retireYear}.`);
}
