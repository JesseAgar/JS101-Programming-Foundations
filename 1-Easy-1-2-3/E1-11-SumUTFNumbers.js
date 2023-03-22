function utf16Value(string) {
  let runningSum = 0;
  
  for (let i = 0; i < string.length; i++) {
    runningSum += string[i].charCodeAt();
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
? a string
* OUTPUTS
? a number representing the sum of UTF16 values
* RULES AND REQUIREMENTS
? 
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97

// * EDGE CASES
utf16Value('');                   // 0
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
/* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? string

*/
/* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? Iterate over each character of string
? Add to sum
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