//  UNDERSTAND THE PROBLEM
// * UNDERSTAND
//   - read the problem description 
//   - examine all examples
//   - ask clarifying questions
// * INPUTS
// ? - a year as a number
// * OUTPUTS
// ? - the century as a string
// * RULES AND REQUIREMENTS
// ? - with st, nd, and rd as appropriate
// ? if last 2 numbers are 11, end in th
// ? if last number is x1, end in st
// ? if end in 12, end if th
// ? if end in x2, end in nd
// ? if end in 13, end in th
// ? if end in x3, end in rd


// ? no negative or 0 years
// * MENTAL MODEL
// ? -
// * EXAMPLES/TEST CASES
//   - understand how the input translates to output
//   - identify edge cases
//   - create the test cases and confirm outputs
// * VALID CASES  */
centuryFrom(256);         // "3rd"
centuryFrom(5);           // "1st"
centuryFrom(10103);       // "102nd"
centuryFrom(1052);        // "11th"
centuryFrom(1127);        // "12th"
centuryFrom(11201);       // "113th"
centuryFrom(100);       // "113th"
// * EDGE CASES


// * DATA STRUCTURES
//   - what sort of actions do you have to do (sort, collect, filter, etc.)
//   - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
//   - this helps you to focus on methods for these types
// ? -
// * ALGORITHM
//   - step by step process that takes you from input to output
//   - handles edges cases and valid example inputs
//   - your code will depend on your algorithm
// ? - input a positive integer
// ? - set centuryAndSuffix = '';
// ? - math.floor x / 100 + 1  to find century, convert to string, add to century spoken

// ? - read last digit and second last digit.
// ? - if 1x, ends in th
// ? - if x1, x2, or x3, end in st, nd, or rd
// ? else end in th
// ? return string

function centuryFrom(year) {
  const century = computeCenturyNumber(year);
  const centurySuffix = computeCenturySuffix(century);

  console.log(century + centurySuffix);
}

function computeCenturyNumber(year) {
  let century = Math.floor(year / 100) + 1;
  if (year % 100 === 0) return century - 1;
  return century;
}

function computeCenturySuffix(century) {
  const centuryString = String(century);
  const lastDigit = centuryString[centuryString.length - 1];
  const secondLastDigit = centuryString[centuryString.length - 2];

  if (secondLastDigit === '1') return 'th';

  switch (lastDigit) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default:  return 'th';
  }
}