// You can work here or download the template!
// Array of animals in the zoo
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// Task 1: Count the total number of animals using a for loop
let totalCount = 0;
for(let i = 0; i < animals.length; i++){
    totalCount++
    // totalCount = i + 1
}
console.log(totalCount)

// Task 2: Count animals with 5 or more letters with while loop
let index = 0;
let countFiveOrMore = 0;

while(index < animals.length){
    if(animals[index].length >= 5) {
        countFiveOrMore++
    }
    index++
}
console.log(countFiveOrMore)

// Task 3: Count animals until find animal that starts with "m"
let position = 0;
let countUntilM = 0;
do {
    if(animals[position][0] === "m") {
        break;
    }
    countUntilM++
    position++
} while(position < animals.length)

console.log(countUntilM)