function multisum(integer) {
  let runningSum = 0;
  for (let i = 1; i <= integer; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      runningSum += i;
    }
  }
  console.log(runningSum);

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
? an integer
* OUTPUTS
? an integer sum of all the multiples of 3 and 5 below and including that integer
* RULES AND REQUIREMENTS
? ignore edges cases and incorrect input
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

// * EDGE CASES
multisum(15); // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60

/* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? number

*/
/* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? Iteration from 1 up to integer, add to running total if multiple of 3 or 5
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
