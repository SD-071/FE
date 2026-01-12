const person1 = {
  firstName: 'Maria',
  lastName: 'Blanco',
  age: 34,
  hobbies: ['Singing', 'Reading'],
  address: {
    street: 'Av Street 34',
    postalcode: 12345,
    city: 'Berlin',
  },
};

// console.log(person1)
// square notation
// console.log(person1["firstName"]);
// console.log(person1["address"]["street"]);
// dot notation
// console.log(person1.age)
// console.log(person1.address)
// console.log(person1.address.street)
// console.log(person1.address.postalcode)
// console.log(person1.hobbies)
// console.log(person1.hobbies[0])
// console.log(person1.hobbies[1])

const personKeys = Object.keys(person1);
// console.log(personKeys)

for (const key of personKeys) {
  // console.log(`${key}`, person1[key])
}

// build-in objets
// Math objetc
// console.log(Math.floor(Math.random() * 10))
// const decimal = 45.89;
// console.log(Math.floor(decimal))
// console.log(Math.ceil(decimal))

// Date object
// console.log("Date now: ", Date.now())
const date = new Date();
// console.log("Year: ", date.getYear() + 1900)
// console.log("Year: ", date.getFullYear())
// console.log("Month: ", date.getMonth())
// console.log("Date: ", date.getDate())
// console.log(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// console.log("Day: ", date.getDay())

// destructuring
// arrays
const numbers = [1, 2, 3, 4, 5];
const [a, , c] = numbers;
console.log(a);
// console.log(b)
console.log(c);
// console.log(d)
// console.log(e)

// Object literals destructuring

const person2 = {
  firstName: 'Tony',
  lastName: 'Canal',
  age: 12,
  hobbies: ['Writing', 'Reading'],
  address: {
    street: 'Av Street 44',
    postalcode: 12345,
    city: 'Berlin',
  },
};

const { hobbies, address, firstName } = person2;

// const lastName = person2.lastName;
console.log(firstName);
console.log(hobbies[1]);
console.log(address);
// const { hobbies, address: {street, postalcode, city}, firstName } = person2;
// console.log(street, postalcode, city)
