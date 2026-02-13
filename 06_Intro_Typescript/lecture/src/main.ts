const printValue = (value: string | number) => {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed());
  }
};

printValue('Hello');
printValue(2);

const greet = (name?: string): string => {
  const safeName = name ?? 'Guest';
  return `Hello, ${safeName}`;
};

console.log(greet('Maria'));
console.log(greet());

const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

console.log(isString('3'));
// console.log(isString(3))

const getInput = (): unknown => {
  return 'Typescript';
};
const input = getInput() as string;
console.log(input);

const printLength = (text: string | null): number | string => {
  if (text === null) return 'Not a string';
  return text.length;
};
console.log(printLength(null));

// Generics

const identity = <T>(value: T): T => {
  return value;
};

const num = identity(222);
const str = identity('Hello');
console.log(num, str);

const printObjectKey = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const mergeElements = <T, U>(a: T, b: U): [T, U] => {
  return [a, b];
};

console.log(mergeElements(1, '5'));

type User<T> = {
  id: number;
  name: string;
  email: string;
  hobbies: T[];
  role: 'admin' | 'user';
};

const user: User<{ id: number; name: string }> = {
  id: 1,
  name: 'Monica',
  email: 'mon@gmail.com',
  hobbies: [
    { id: 1, name: 'singing' },
    { id: 2, name: 'running' },
  ],
  role: 'admin',
};

console.log(printObjectKey(user, 'name'));

// Enums

// enum Status {
//   Loading = 'LOADING',
//   Success = 'SUCCES',
//   Error = 'ERROR',
// }

// const logStatus = (status: Status) => {
//   if (status === Status.Loading) console.log('Loading...');
// };

// logStatus(Status.Loading);
// logStatus('LOADING' as Status);

// Utilities

type Person = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
};

const person: Person = {
  id: 1,
  name: 'Monica',
  email: 'mon@gmail.com',
  role: 'user',
};
console.log(person);

type PartialPerson = Partial<Person>;
const person2: PartialPerson = { id: 2, name: 'Alice', email: 'alice@.gmail.com' };
console.log(person2);

type PickPersonName = Pick<Person, 'name' | 'email'>;

const person3: PickPersonName = { name: 'John', email: 'jonh@.gmail.com' };

type OmitPersonRole = Omit<Person, 'role'>;
console.log(person3)

const person4: OmitPersonRole = {
  id: 1,
  name: 'Monica',
  email: 'mon@gmail.com'
};
console.log(person4)

type Role = "user" | "admin" | "guest";

type Permissions = Record<Role, boolean>

const userPersmissions: Permissions = {
    user: true,
    admin: false,
    guest: false
}
console.log(userPersmissions)