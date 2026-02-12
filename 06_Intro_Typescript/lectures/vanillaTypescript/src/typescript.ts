import type { User, UsersArray } from './Types';
import type { IPerson, ICustomer, IEmployee } from './Interfaces';
let age: number | string = 22;
const firstName: string = 'Laure';
let isStudent: boolean = true;

// Arrays
const numbersArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['Hi', 'Hello', 'Bye'];
const mixedArray: (number | string)[] = [1, '2', '4', 5];

// Tuples
const tupleNumbers: [number, number, number] = [1, 2, 3];
const tupleStrings: [string, string, string, string] = ['Hi', 'Hello', 'Bye', 'Goodbye'];

const secondMixedArray: Array<number | string | boolean> = [1, '2', true];

const person: User = {
  name: 'Alice',
  age: 22,
  isStudent: true,
  hobbies: [
    { id: 1, name: 'singing' },
    { id: 2, name: 'reading' },
  ],
  email: 'mar@gmail.com',
};

const person2: IPerson = {
  name: 'Alice',
  age: 22,
  hobbies: [
    { id: 1, name: 'singing' },
    { id: 2, name: 'reading' },
  ],
  email: 'mar@gmail.com',
  address: {
    street: 'Av street',
    streetNumber: 22,
    postalcode: 23230,
    country: 'Germany',
  },
};

const employee1: IEmployee = {
  name: 'Alice',
  age: 22,
  hobbies: [
    { id: 1, name: 'singing' },
    { id: 2, name: 'reading' },
  ],
  email: 'mar@gmail.com',
  address: {
    street: 'Av street',
    streetNumber: 22,
    postalcode: 23230,
    country: 'Germany',
  },
  salary: 4000,
  isAdmin: true,
  startDate: '',
  endDate: '',
};

const customer1: ICustomer = {
  name: 'Alice',
  age: 22,
  hobbies: [
    { id: 1, name: 'singing' },
    { id: 2, name: 'reading' },
  ],
  email: 'mar@gmail.com',
  address: {
    street: 'Av street',
    streetNumber: 22,
    postalcode: 23230,
    country: 'Germany',
  },
  created_at: '',
  updated_at: '',
};

const people: UsersArray = [person, person];

function greetPerson(firstName: string, greeting: string): string {
  return `${greeting}, ${firstName}`;
}
