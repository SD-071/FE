// Activity 1: forEach()
const numbers = [1, 2, 3, 4, 5];
// step 2
// numbers.forEach((number) => console.log(number))
// step 3
let sum = 0;
numbers.forEach((number) => (sum += number));
// console.log("Sum result: ", sum);

//step 4
const squaredNumbers = [];
numbers.forEach((number) => squaredNumbers.push(number * number));
// console.log("Square numbers: ", squaredNumbers)

// Activity 2: map()
// step 2
const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers)

// step 3
const stringNumbers = numbers.map((number) => `Number: ${number}`);
// console.log(stringNumbers)

// step 4
const numberObjects = numbers.map((number) => ({ original: number, square: number ** 2 }));
// console.log(numberObjects)

// Activity 3: find()
// step 1:
const numbers2 = [10, 20, 30, 40, 50];

// step 2
const greaterThan25 = numbers2.find((number) => number > 25);
// console.log(greaterThan25);

// step 3
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// step 4
const foundPerson = people.find((person) => person.name === 'Charlie');
// console.log(foundPerson);

// Activity 4: filter()
// step 1
const numbers3 = [5, 10, 15, 20, 25, 30];

// step 2
const numbersGreaterThan15 = numbers3.filter((number) => number > 15)
// console.log(numbersGreaterThan15)

// step 3
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 88 },
  { name: 'Eve', grade: 95 },
];

// step 4
const studentsAbove80 = students.filter((student) => student.grade > 80)
// console.log(studentsAbove80)
