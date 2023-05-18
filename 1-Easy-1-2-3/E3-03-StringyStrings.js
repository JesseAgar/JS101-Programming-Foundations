stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(0);    // ""
stringy(-3);    // ""

function stringy(size) {
  let result = '';
  for (let idx = 1; idx <= size; idx++) {
    result += (idx % 2);
  }
  console.log(result);
}

