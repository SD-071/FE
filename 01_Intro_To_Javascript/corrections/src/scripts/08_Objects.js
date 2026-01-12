// Activity 1: Objects Literals
const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 234,
    isRead: true,
    summary() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? "Yes" : "No"}`);
    }
}

// falsy values => null, undefine, 0, "", false
// console.log(book.summary())

// Activity 2: Destructuring
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [fruit1, , fruit3] = fruits;
// console.log(fruit1)
// console.log(fruit3)

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};
const {name, age} = person;
// console.log(name, age)

const {address: {city, zip}} = person;
// console.log(city, zip)

// Initial function
function displayPerson({name, age}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person)