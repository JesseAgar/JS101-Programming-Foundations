wait(1000);
console.log('a');

function wait(waitMilliseconds) {
  let startTime = new Date().getTime();
  let timerDone = false;
  while (!timerDone) {
    let currentTime = new Date().getTime();
    if (waitMilliseconds <= (currentTime - startTime)) {
      timerDone = true;
    }
  }
}
