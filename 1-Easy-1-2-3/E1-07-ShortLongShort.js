function shortLongShort(string1, string2) {
    let longString = string1.length > string2.length ? string1 : string2;
    let shortString = string2.length < string1.length ? string2 : string1;
    console.log( shortString + longString + shortString);
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
? 2 strings
* OUTPUTS
? 1 string of those 2 strings
* RULES AND REQUIREMENTS
? assume different lengths
*/
/* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
shortLongShort('aa', 'bbbb');
shortLongShort('aaaaaa', 'bb');
// * EDGE CASES
shortLongShort('', 'bbbb');
shortLongShort('aaaa', 'bbbb');
shortLongShort('bb', 'aa');
/* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? strings

*/
/* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? SET long string short string
? PRINT short long short
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