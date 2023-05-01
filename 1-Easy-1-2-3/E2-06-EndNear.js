// penultimate('hello my') //hello
// penultimate('hello my name is') // name
// penultimate('hello   my name    is') //name

function penultimate(words) {
  let stringArray = words.split(' ').filter(x => x !== '');
  console.log(stringArray[stringArray.length - 2]);
};

console.log(middleWord('a b c  e'));


function middleWord(words) {
  let wordArray = words.split(' ').filter(word => word !== '');
  console.log(wordArray);
  console.log(wordArray.length);
  if (wordArray.length % 2 == 0) {
    return "Even number of words, no middle word"
  }
  return wordArray[(wordArray.length / 2) - 0.5];
}
