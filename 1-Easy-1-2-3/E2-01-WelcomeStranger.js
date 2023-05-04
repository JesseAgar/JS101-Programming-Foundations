/* UNDERSTAND THE PROBLEM
  - read the problem description 
  - identify inputs/outputs
  - identify rules
  - identify requirements
  - mental model problem
  - ask clarifying questions
  - examine all examples
* INPUTS
? - an array (with first, middle, and last names) and an object (with keys 'title' and 'occupation')
* OUTPUTS
? - a string that includes the names, title, and occupation
* RULES AND REQUIREMENTS
? - greeting is full name
? - ignores other keys,
* MENTAL MODEL
? - put the array and object entry info in the correct spots
* EXAMPLES/TEST CASES
  - understand how the input translates to output
  - identify edge cases
  - create the test cases and confirm outputs
* VALID CASES  */
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// * EDGE CASES
console.log(
  greetings([], { })
);
console.log(
  greetings([undefined, null], {title: null, occupation: undefined })
);
console.log(
  greetings(["John", "Q", "Doe"], {title: "Master", height: 2.11, occupation: "Plumber" })
);
console.log(
  greetings(["John"], {title: "Master", height: 2.11})
);
/* 
* DATA STRUCTURES
  - what sort of actions do you have to do (sort, collect, filter, etc.)
  - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
  - this helps you to focus on methods for these types
? - array, object
? - use a template literal
* ALGORITHM
  - step by step process that takes you from input to output
  - handles edges cases and valid example inputs
  - your code will depend on your algorithm
? - if array == undefined, null, have it just read "hello"
? - if object.title is missing, just have it say "you are a 'occupation'"
? - if object.occupation is missing, have it say "you are a 'master' at something"
? - join array
? - read object entries
* CODE
  - time to write the code!
  - use everything you've gathered in your pedac to write the code 

  Debug (if needed)
  - if there are errors in output, don't panic!
  - carefully review algorithm before looking at your code
  - once you've identified the issue, change the algorithm first, then fix the code
  - try again!
*/

function greetings(names, professionalDetails) {

  return `Hello${names.join(' ')}, you are a ${professionalDetails.title + ' ' + professionalDetails.occupation}`;
}