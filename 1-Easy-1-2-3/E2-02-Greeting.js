/* UNDERSTAND THE PROBLEM
* UNDERSTAND
  - read the problem description 
  - examine all examples
  - ask clarifying questions
* INPUTS
? - a name OR a name with a !
* OUTPUTS
? - different depending on whether the ! is included
* RULES AND REQUIREMENTS
? - 
* MENTAL MODEL
? - Create an array and check for !, then give output depending
* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
// greeting() 'Bob', 'Alice!', etc
// * EDGE CASES
//  ? empty strings, give another response
/* 
* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? - strings
* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? - get input
? - trim and check for empty string. Response if empty string, else:
? - check for ! in string. Response else different response
* CODE
  - time to write the code!
  - use everything you've gathered in your pedac to write the code 

  Debug (if needed)
  - if there are errors in output, don't panic!
  - carefully review algorithm before looking at your code
  - once you've identified the issue, change the algorithm first, then fix the code
  - try again!
*/

const readlineSync = require("readline-sync");

greeting();

function greeting() {
  let userName = readlineSync.question("What is your name? =>  ");
  while (userName.trim() == '') {
    userName = readlineSync.question("No really, what is your name? I can do this all day... =>  ");
  }
  if (userName[userName.length - 1] == '!') {
    console.log(`HELLO ${userName.slice(0, -1).toUpperCase()}.`);
  } else {
    console.log(`Hello ${userName}`);
  }
}



