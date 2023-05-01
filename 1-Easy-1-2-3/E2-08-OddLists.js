//  UNDERSTAND THE PROBLEM
// * UNDERSTAND
//   - read the problem description 
//   - examine all examples
//   - ask clarifying questions
// * INPUTS
// ? - An array
// * OUTPUTS
// ? - An array with only the 1st, 3rd, 5th, etc elements
// * RULES AND REQUIREMENTS
// ? -
// * MENTAL MODEL
// ? - Single array input, maybe can be done with filter?
// * EXAMPLES/TEST CASES
//   - understand how the input translates to output
//   - identify edge cases
//   - create the test cases and confirm outputs
// * VALID CASES  */
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]

// * EDGE CASES
console.log(oddities([])); // logs []

// * DATA STRUCTURES
//   - what sort of actions do you have to do (sort, collect, filter, etc.)
//   - what kind of data are you primarily dealing with? (strings, arrays, numbers, objects, etc.)
//   - this helps you to focus on methods for these types
// ? -
// * ALGORITHM
//   - step by step process that takes you from input to output
//   - handles edges cases and valid example inputs
//   - your code will depend on your algorithm
// ? -
// ? -
// ? -
// * CODE
//   - time to write the code!
//   - use everything you've gathered in your pedac to write the code 
//   Debug (if needed)
//   - if there are errors in output, don't panic!
//   - carefully review algorithm before looking at your code
//   - once you've identified the issue, change the algorithm first, then fix the code
//   - try again!


function oddities(inputArray) {
  let oddElementsArray = []
  for (let i = 0; i < inputArray.length; i += 2) {
    oddElementsArray.push(inputArray[i]);
  }
  return oddElementsArray;
}


// function oddities(inputArray) {
//   let oddCounter = 0;
//   return inputArray.filter( x => {
//     oddCounter += 1;
//     return oddCounter % 2 === 1;
//   });
// }
