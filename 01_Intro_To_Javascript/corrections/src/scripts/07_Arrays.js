// Activity 1: Initialization
let myArray = [42, 'Hello, world!', true, 3.14, 'JavaScript'];
// console log the whole array
// console.log(myArray)
// access individual items
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

for(const item of myArray) {
    // console.log("Loop: ", item)
}

// updating values of an item in the array
myArray[1] = 'Changed value';
// console.log(myArray)

// Activity 2: Push, pop, shift, unshift
// create an array
myArray = [1, 2, 3, 4, 5];
// adding 6 and 7 to the array
myArray.push(6)
myArray.push(7)
// console.log(myArray)

// remove last item
myArray.pop()
// console.log(myArray)

// remove first element
myArray.shift()
// console.log(myArray)

// add element at the begining (0 and 1)
myArray.unshift(1)
myArray.unshift(0)
// console.log(myArray)

// Activity 3: Reversing
// reverse
const numbers = [1, 2, 3, 4, 5];
// console.log(numbers)
numbers.reverse()
// console.log(numbers)

// toReversed()
const letters = ['a', 'b', 'c', 'd', 'e'];
const lettersReversed = letters.toReversed()
// console.log(letters)
// console.log(lettersReversed);

// Activity 4: Splicing
// Array 1: Use splice() method
const array1 = [10, 20, 30, 40, 50];
array1.splice(2, 1, 35, 36)
// console.log(array1)

// Array 2: Use toSpliced() method
const array2 = ['x', 'y', 'z'];
const toSplicedArray = array2.toSpliced(1, 1, "b", "c")
// console.log(array2)
// console.log(toSplicedArray)

// Activity 5: Slicing
const array = [2, 4, 6, 8, 10, 12, 14, 16];
// console.log(array)
// console.log(array.slice(2))
// console.log(array.slice(3, 6))

// Activity 6: Joining
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Default delimiter (comma)(
console.log(fruits.join())
// Using dash as delimiter
console.log(fruits.join("-"));
// Using space as delimiter;
console.log(fruits.join(' '));
// Using ' and ' as delimiter
console.log(fruits.join(' and '));
// Without any delimiter
console.log(fruits.join(''));

// Activity 7: Loops
const numberArray = [10, 20, 30, 40, 50];

// for loop
for(let i = 0; i < numberArray.length; i++) {
    console.log('For loop', numberArray[i]);
}
// for... of
for(const item of numberArray) {
    console.log("For... of loop", item)
}

// array methods
numberArray.forEach((number) => console.log("ForEach loop", number))
numberArray.map((number) => console.log("Map loop", number))