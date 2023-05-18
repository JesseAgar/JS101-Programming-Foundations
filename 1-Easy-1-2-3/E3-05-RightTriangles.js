triangle(9);
triangle(-9);


function triangle(triangleWidth) {
  if (Math.sign(triangleWidth) === -1) {
    printReverseTriangle(triangleWidth);
  } else {
    printTriangle(triangleWidth);
  }
}

function printTriangle(triangleWidth) {
  let currentStars = 1;
  while (true) {
    if (triangleWidth < currentStars) break;
    printLine(triangleWidth, currentStars);
    currentStars += 1;
  }
}

function printReverseTriangle(triangleWidth) {
  triangleWidth = Math.abs(triangleWidth);
  let currentStars = triangleWidth;
  while (true) {
    if (triangleWidth < currentStars || currentStars < 1) break;
    printReverseLine(triangleWidth, currentStars);
    currentStars -= 1;
  }
}

function printLine(triangleWidth, currentStars) {
  let stars = createStars(currentStars);
  let spaces = createSpaces(triangleWidth - currentStars);
  console.log(spaces + stars);
}

function printReverseLine(triangleWidth, currentStars) {
  let stars = createStars(currentStars);
  let spaces = createSpaces(triangleWidth - currentStars);
  console.log(spaces + stars);
}

function createSpaces(numSpaces) {
  return ' '.repeat(numSpaces);
}

function createStars(numStars) {
  return '*'.repeat(numStars);
}