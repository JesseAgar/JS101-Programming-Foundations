getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
getGrade(50, 50, 204);

function getGrade(grade1, grade2, grade3) {
  let average = mean(grade1, grade2, grade3);
  console.log(getLetterGrade(average));
}

function mean(...numbers) {
  let sum = numbers.reduce(
    (acc, num) => acc + num,
    0
  );

  let numOfTerms = numbers.length;
  return sum / numOfTerms;
}

function getLetterGrade(average) {
  if (average >= 0 && average < 60) {
    return "F";
  }
  if (average >= 60 && average < 70) {
    return "D";
  }
  if (average >= 70 && average < 80) {
    return "C";
  }
  if (average >= 80 && average < 90) {
    return "B";
  }
  if (average >= 90 && average <= 100) {
    return "A";
  }
  return "invalid input";
}