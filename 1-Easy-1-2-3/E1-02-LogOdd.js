let oddNumber = 1;

function logOdd() {
  if (oddNumber > 100) {
    return;
  } else {
  console.log(oddNumber);
  oddNumber += 2;
  logOdd();
  }
}

logOdd();

/* UNDERSTAND THE PROBLEM
  - read the problem description 
  - identify inputs/outputs
  - identify rules
  - identify requirements
  - mental model problem
  - ask clarifying questions
  - examine all examples
* INPUTS
? no inputs
* OUTPUTS
? All odd numbers from 1 to 100, each number on a separate line
* RULES
? 
* REQUIREMENTS
? 
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */

// * EDGE CASES
// ? should log 1 and 99
/* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
? numbers
  - this helps you to focus on methods for these types
*/
/* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? iterate over numbers from 1 to 100.
? check if odd
? if odd, log to console
? or
? x = 1
? log x
? log x += 2
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
