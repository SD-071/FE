class Person {
  constructor(name, age, address, hobbies) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.hobbies = hobbies;
    this.health = 100;
    this.hunger = 100;
    this.sleep = 100;
  }

  // Getter
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }

  getHealth() {
    return this.health;
  }

  // Setters
  setName(newName) {
    this.name = newName;
  }

  setHealth100() {
    this.health = 100;
  }

  diminishHealth(damage) {
    this.health -= damage
  }
  // Methods

}

const person1 = new Person("Maria", 23, "Av Street 43 23456", ["Reading", "Traveling"]);
const person2 = new Person('Luca', 24, 'Av Street 44 23456', ['Reading', 'Traveling']);
const person3 = new Person('Paul', 25, 'Av Street 45 23456', ['Reading', 'Traveling']);
const person4 = new Person('Alice', 26, 'Av Street 56 23456', ['Reading', 'Traveling']);

console.log(person1)
// Getter methods in use
console.log("Person 1 name:", person1.getName())
console.log('Person 1 age:', person1.getAge());

// Setter methods in use
console.log(person3.getHealth())
person3.diminishHealth(20)
console.log(person3.getHealth())
person3.diminishHealth(30)
console.log(person3.getHealth())
person3.setHealth100()
console.log(person3.getHealth())


