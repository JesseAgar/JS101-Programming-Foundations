function randomNumBetween(minnum, maxnum) {
  return Math.floor((Math.random() * maxnum + 1) - minnum) + minnum
}

console.log(randomNumBetween(0, 1));