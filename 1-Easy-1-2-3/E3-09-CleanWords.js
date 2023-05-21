// 65-90 and 97-122 inclusive are letters
// 32 is space

cleanUp("---what's NMMy][ +*& line?");    // " what s my line "

function cleanUp(dirtyString) {
  let cleanString = '';

  for (let charIndex = 0; charIndex < dirtyString.length; charIndex++) {
    if (isALetter(dirtyString[charIndex])) {
      cleanString += dirtyString.charAt(charIndex);
    } else if (lastCharIndex(cleanString) !== ' ') {
      cleanString += ' ';
    }
  }

  console.log(cleanString);
}

function isALetter(inputChar) {
  return isALowerCaseLetter(inputChar) || isAUpperCaseLetter(inputChar);
}

function isALowerCaseLetter(inputChar) {
  return inputChar.charCodeAt(0) >= 65 && inputChar.charCodeAt(0) <= 90;
}

function isAUpperCaseLetter(inputChar) {
  return inputChar.charCodeAt(0) >= 97 && inputChar.charCodeAt(0) <= 122;
}

function lastCharIndex(inputString) {
  return inputString[inputString.length - 1]
}