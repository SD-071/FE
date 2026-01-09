// Part 1: Function Declarations

// 1. Declare a function with no parameters that outputs something to the console
function hello() {
//   let num = 4;
//   if (num === 4) {
//     return 'Hello, 4!';
//   }
  // console.log('Hello, World!');
  return 'Hello, World!';
}
// Call the function
const message = hello();
// console.log(message)

// 2. Declare a function with one parameter that returns something
function square(num) {
  return num * num;
  // return num ** 2
  // return Math.pow(num, 2)
}

// Call the function and store the result
const squareResult = square(5);

// Output the result to the console
// console.log(squareResult);
// console.log(square(2));
// console.log(square(4));

// 3. Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number!';
      break;
  }
  return dayName;
}

// Call the function and store the result
const date = new Date();
console.log(date.getDate()) // day of the month
const dayOfTheWeek = getDayName(date.getDay());
// Output the result to the console
// console.log(dayOfTheWeek);

// Part 2: Function Expressions

// 1. Function expression with no parameters
const greetExpresion = function () {
    return "Hello, World!"
}
// Call the function
console.log(greetExpresion());

// 2. Function expression with one parameter
const squareExpresion = function (num) {
    return num ** 2
}
// Call the function and store the result
const resultSquareExpresion = squareExpresion(5)

// Output the result to the console
console.log(resultSquareExpresion);

// 3. Function expression with one parameter and a switch statement
const getDayNameExpresion = function (dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number!';
      break;
  }
  return dayName;
}
// Call the function and store the result
const dayNameResult = getDayNameExpresion(date.getDay());
// Output the result to the console

console.log(dayNameResult)


function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(3, 5));
console.log(sum(5, 3));

function substract(n1, n2) {
    return n1 - n2;
}

console.log(substract(5, 3));
console.log(substract(3, 5));