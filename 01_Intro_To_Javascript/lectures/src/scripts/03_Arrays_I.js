const myNumbersArray = [1, 2, 3, 4, 5];
const myStringsArray = ['Maria', 'Mario', 'Laura', 'Paul'];
const myBooleanArray = [true, false];
const myArraysArray = [
  [1, 2],
  [3, 4],
];
const myObjectsArray = [
  { name: 'Maria Blanco', age: 45 },
  { name: 'Paul Piloto', age: 34 },
];
const mixedArray = [1, 2, 'Hello', true, [1, 2]];

// console.log(myNumbersArray)
// console.log(myNumbersArray[0])
// console.log(myNumbersArray[5])
// console.log(myNumbersArray.length)
// console.log(myNumbersArray[myNumbersArray.length - 1])
// console.log(myNumbersArray[Math.floor(myNumbersArray.length / 2)])

// push vs pop
myNumbersArray.push(6);
myNumbersArray.push(8);
// console.log(myNumbersArray);
myNumbersArray.pop();
// console.log(myNumbersArray);

// unshift vs shift
myNumbersArray.unshift(10);
// console.log(myNumbersArray);

myNumbersArray.shift();
// console.log(myNumbersArray);

// reverse() vs toReversed()
// myNumbersArray.reverse();
// console.log(myNumbersArray)
const myReversedArray = myNumbersArray.toReversed();
// console.log(myNumbersArray)
// console.log(myReversedArray)

// splice() vs toSpliced()
console.log(myStringsArray);
// myStringsArray.splice(1, 2, "Lucy", "Cesar", "Paul", 5)
const mySplicedArray = myStringsArray.toSpliced(1, 2, 'Lucy', 'Cesar', 'Paul', 5);
// console.log(myStringsArray);
// console.log(mySplicedArray);

// slice
// console.log(myStringsArray.slice(1, 3))
// console.log(myStringsArray)

// join
console.log(myStringsArray.join(' and '));

// loops
// for loop
for (let i = 0; i < myNumbersArray.length; i++) {
  //   console.log(myNumbersArray[i]);
}

for (let i = 0; i < myStringsArray.length; i++) {
  //   console.log(`Hello, ${myStringsArray[i]}`);
}

// for... of
for (const string of myStringsArray) {
  console.log(`Hello, ${string}`);
}
