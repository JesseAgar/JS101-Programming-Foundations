let readlineSync = require('readline-sync');

function sumOrProductSeries() {
  let integer = parseInt(readlineSync.question("Enter integer greater than 0: "));
  while (integer <= 0) {
    integer = readlineSync.question("Invalid input. Please enter an integer greater than 0: ");
  }
  
  let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

  while (operation != 's' && operation != 'p') {
    operation = readlineSync.question('Invalid input. Enter "s" to compute the sum, or "p" to compute the product: ');
  }
  
  if (operation == 's') console.log(sumSeries(integer));
  if (operation == 'p') console.log(productSeries(integer));
  
}

function sumSeries(x) {
  if (x <= 0) {
    return 0;
  } else {
    return x + sumSeries(x-1);
  } 
}

function productSeries(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * productSeries(x-1);
  } 
}
sumOrProductSeries();

/* UNDERSTAND THE PROBLEM
  - read the problem description 
  - identify inputs/outputs
  - identify rules
  - identify requirements
  - mental model problem
  - ask clarifying questions
  - examine all examples
* INPUTS
? Integer
? s or p to indicate different actions
* OUTPUTS
? a number as part of a string
* RULES AND REQUIREMENTS
? should handle edge cases
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
//sumSeries(4); 
// * EDGE CASES
//sumSeries(-4) // should say invalid input and ask again
//sumSeries(0) // should say invalid input and ask again
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
? take number, multiply or add by n -1 till 0
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