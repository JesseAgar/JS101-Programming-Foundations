const readlineSync = require("readline-sync");

madlibs();

function madlibs() {
  const noun = getNoun();
  const verb = getVerb();
  const adjective = getAdjective();
  const adverb = getAdverb();
  console.log(`Your ${adjective} ${noun} can ${adverb} ${verb}`);
}

function getNoun() {
  return readlineSync.question("Enter a noun: ");
}

function getVerb() {
  return readlineSync.question("Enter a verb: ");
}

function getAdjective() {
  return readlineSync.question("Enter an adjective: ");
}

function getAdverb() {
  return readlineSync.question("Enter an adverb: ");
}