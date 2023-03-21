let readlineSync = require('readline-sync');
function roomSize() {
  console.log('Room Width:');
  let roomWidth = parseInt(readlineSync.prompt(""));
  console.log('Room Height:');
  let roomHeight = parseInt(readlineSync.prompt(""));
  console.log(`The area of the room is ${(roomHeight * roomWidth).toFixed(2)} square meters (${((roomHeight * roomWidth) * 10.7639).toFixed(2)} square feet)`);
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
? 2 numbers, length and width of square in square metesr
* OUTPUTS
? 1 number, area in square meeters and square feet
* RULES AND REQUIREMENTS
? Don't have to validate input
? 2 decimal places
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
roomSize();

// * EDGE CASES

/* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? numbers

*/
/* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? 
?
?  
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