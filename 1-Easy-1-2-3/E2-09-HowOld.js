function howOldIsTeddy() {
  let age = randomNumberBetween(20, 120);
  return `Teddy is.... ${age}??`
}

function randomNumberBetween(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
}

console.log(howOldIsTeddy());