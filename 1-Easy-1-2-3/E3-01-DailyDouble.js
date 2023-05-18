
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunch(inputString) {
  let removedDoubles = '';

  for (let strIndex = 0; strIndex < inputString.length; strIndex++) {
    if (inputString[strIndex] === inputString[strIndex - 1]) {
      continue;
    }
    removedDoubles += inputString[strIndex];
  }

  return removedDoubles;
}


