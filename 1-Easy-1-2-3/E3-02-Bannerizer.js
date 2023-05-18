function bannerizer(inputString) {
  let maxLineLength = 60;
  let stringLength = maxLineLength >= inputString.length ? inputString.length : maxLineLength;
  let paddingAmount = 2;
  let lineLength = stringLength + (paddingAmount * 2);
  let emptyLine = addPadding(createSpaces(stringLength), paddingAmount);
  let dashedLine = createDashes(stringLength + (paddingAmount * 2));
  let text = splitStringByLength(inputString, stringLength);

  console.log(addCorners(dashedLine));
  console.log(addHorizontalEdge(emptyLine));
  text.forEach(subString => {
    console.log( addHorizontalEdge(addPadding((subString + createSpaces(((lineLength) - subString.length - (paddingAmount * 2)))), paddingAmount)));
  });
  console.log(addHorizontalEdge(emptyLine));
  console.log(addCorners(dashedLine));
}

function createSpaces(numSpaces) {
  return ' '.repeat(numSpaces);
}

function createDashes(numDashes) {
  return '-'.repeat(numDashes);
}

function addHorizontalEdge(inputString) {
  return '|' + inputString + '|';
}

function addCorners(inputString) {
  return '+' + inputString + '+';
}

function addPadding(inputString, paddingAmount) {
  let padding = createSpaces(paddingAmount);
  return padding + inputString + padding;
}

function splitStringByLength(inputString, maxLength) {
  let splitString = [];
  while (inputString.length > maxLength) {
    let splitPoint = inputString.lastIndexOf(' ', maxLength);
    splitString.push(inputString.slice(0, splitPoint));
    inputString = inputString.slice(splitPoint + 1);
  }

  splitString.push(inputString);
  return splitString;
}


bannerizer('');
console.log('');
bannerizer('sdf asdf sad f sad asdf asdf adfa asdf asdafsd  sfas  dfas fasdfas dasdfasd fasdf asdfasd asdf asdfa sdfasdf asdfj asdlkfj asdkljasdf kljasd fkl;jasd;fkl jasdkl;ja sdfasdfas dasdf asasfd  asdfa sfd asdf asasf sdaf  fas f');