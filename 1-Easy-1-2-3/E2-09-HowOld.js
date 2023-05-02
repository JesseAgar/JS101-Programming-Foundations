function howOldIsTeddy() {
  let age = randomNumberBetween(120, 20);
  return `Teddy is.... ${age}??`;
}

function randomNumberBetween(minNum, maxNum) {
  if (minNum >= maxNum) {
    [minNum, maxNum] = [maxNum, minNum];
  }

  return Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
}

console.log(howOldIsTeddy());