function sum(n1, n2) {
  return n1 + n2;
}

function substract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}


function calculate(n1, n2, operation) {
  console.log("Calculating")
  return operation(n1, n2)
}

// console.log(calculate(4, 4, sum));
// console.log(calculate(6, 4, substract));
// console.log(calculate(3, 6, multiply));

const numbers = [1 ,80 ,20, 40, 80];
const people = ["Paul", "John", "Pati"]

function consoleLogging(msg){
  console.log(msg)
}
function forLoopArray (array) {
  for (const item of array) {
   return consoleLogging(item)
  }
} 
// forLoopArray(numbers)
// forLoopArray(people)

// forEach()
const forEachResult = numbers.forEach(consoleLogging);
console.log(forEachResult)
people.forEach((person) => console.log(`Hello, ${person}`))

// map()
const mapResult = numbers.map((num) => num ** 2);

console.log(mapResult)

// find()
const found80 = numbers.find((num) => num === 80);
console.log(found80)

// filter()
const foundAll80 = numbers.filter((num) => num === 80);
console.log(foundAll80);