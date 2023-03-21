let readlineSync = require("readline-sync");
const FEET_PER_METER_SQUARED = 10.7639;

function findArea() {
  console.log('Please enter units in "m" or "ft":');
  let units = readlineSync.prompt();
  if (units == 'm') units = 'square meters';
  if (units == 'ft') units = 'square feet';
  console.log('Please enter width:');
  let width = readlineSync.prompt();
  console.log('Please enter height:');
  let height = readlineSync.prompt();
  let alternative;
  alternative = units == 'square meters' ? ` (${(width * height * FEET_PER_METER_SQUARED).toFixed(2)} square feet)`
    : units == 'square feet' ? ` (${(width * height / FEET_PER_METER_SQUARED).toFixed(2)} square meters)` 
    : '';
    
  console.log('The area of the room is ' + (width * height).toFixed(2) + ' ' + units + alternative);
}

/* UNDERSTAND THE PROBLEM
  - read the problem description 
  - identify inputs/outputs
  - identify rules
  - identify requirements
  - mental model problem
  - ask clarifying questions
  - examine all examples
* INPUTS
? 1 square meter == 10.7639 square feet
? User input length and width
* OUTPUTS
? square footage and meterage
* RULES AND REQUIREMENTS
? Don't worry about checking for proper input
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
findArea()
// * EDGE CASES

/* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? numbers and strings

*/
/* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? prompt for inputs
? check for meters or square footage input
? multiply
? return proper units and alternative units
*/

/* CODE
  - time to write the code!
  - use everything you've gathered in your pedac to write the code 

  Debug (if needed)
  - if there are errors in output, don't panic!
  - carefully review algorithm before looking at your code
  - once you've identified the issue, change the algorithm first, then fix the code
  - try again!
*/