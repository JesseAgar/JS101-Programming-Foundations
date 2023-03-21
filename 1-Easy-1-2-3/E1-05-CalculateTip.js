let readlineSync = require('readline-sync');

function calculateTip() {
  let bill = readlineSync.question("What is the bill amount? ");
  bill = bill[0] == '$' ? bill.substring(1,bill.length)
                        : bill;
  let tipPercent = readlineSync.question("What is the tip percentage (ex: 15%)? ");
  console.log('The tip is: $' + (parseFloat(bill) * parseFloat(tipPercent)/100).toFixed(2));
  console.log('The total is: $' + (parseFloat(bill) + parseFloat(bill) * parseFloat(tipPercent)/100).toFixed(2));

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
? 2 numbers, tip percent and bill cost
* OUTPUTS
? total including tip and just the tip
* RULES AND REQUIREMENTS
? Ignore invalid input 
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
calculateTip();
// * EDGE CASES

/* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? 

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