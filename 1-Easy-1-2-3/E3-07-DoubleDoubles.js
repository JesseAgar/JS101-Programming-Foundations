twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

function twice(number) {
  if (isDoubleNumber(number)) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

function isDoubleNumber(number) {
  let stringOfNumber = String(number);
  let middleIndex = stringOfNumber.length / 2;
  let leftSide = stringOfNumber.substring(0, middleIndex);
  let rightSide = stringOfNumber.substring(middleIndex);
  return leftSide === rightSide;
}