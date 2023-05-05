let myVar = [1];

function myFunc(myVar) {
myVar[0] = [2];
}

myFunc();
console.log(myVar);