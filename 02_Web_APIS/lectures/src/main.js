// Selecting elements from the DOM
const heading = document.querySelector('h1');
const form = document.querySelector('#addItemForm');
const list = document.querySelector('#myList');
const clearListBtn = document.querySelector('#clearList');
const userList = document.querySelector('#userList');

// Array to display items in a list
const listItems = JSON.parse(localStorage.getItem("tasks")) || [];
listItems.forEach((item) => addLiItem(item));

// Adding styling for the heading
heading.textContent = 'Hello World';
heading.style.color = 'Purple';
heading.style.fontSize = '24px';

// Creating a li element with a delete button
function addLiItem(value) {
  const li = document.createElement('li');
  li.className = 'li-item w-50 text-xs flex justify-between items-center bg-stone-200 mb-2 p-2 rounded';
  // li.classList.add("list-item")

  const span = document.createElement('span');
  span.textContent = value;
  span.className = 'text-gray-800 font-medium';
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'bg-red-900 text-white px-2 py-1 rounded hover:bg-red-700';
  deleteBtn.addEventListener('click', (e) => {
    li.remove();
    localStorage.setItem("tasks", JSON.stringify(listItems.filter((item) => item !== value)))
  });

  li.classList.add('listItem');
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}
// Handling a Form submission event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#itemInput').value.trim();
  addLiItem(input);
  listItems.push(input);
  localStorage.setItem('tasks', JSON.stringify(listItems));
  form.reset();
});

// Clear the list
clearListBtn.addEventListener("click", () => {
  localStorage.removeItem("tasks")
  const liItems = document.querySelectorAll('.li-item');
  liItems.forEach((item) => {
    item.remove()
  })
})

// Creating a card element
const cardUser = (user) => {
  const card = document.createElement('div');
  card.className = 'flex flex-col gap-1 bg-gray-100 w-56 text-sm rounded-xl shadow';

  const image = document.createElement('img');
  image.src = 'https://picsum.photos/200';
  image.alt = user.name;
  image.className = 'max-h-34 rounded-t-xl';

  const cardBody = document.createElement('div');
  cardBody.className = 'p-4';

  const title = document.createElement('h2');
  title.textContent = user.name;
  title.classList.add('font-bold');

  const email = document.createElement('p');
  email.textContent = `Email: ${user.email}`;

  cardBody.appendChild(title);
  cardBody.appendChild(email);

  card.appendChild(image);
  card.appendChild(cardBody);

  userList.appendChild(card);
};

// FETCH -> then/catch logic
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((data) => {
//     console.log(data)
//     data.map((user) => cardUser(user))

// })
// .catch((err) => console.error("Error: ", err))

// async function getUsers1() {

// }

// FETCH -> async/await logic
const getUsers = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }
};

// displaying the data retrive by the getUsers() async function
window.addEventListener('load', async () => {
  const users = await getUsers();
  console.log(users);
  users.map((user) => cardUser(user));
});


// localStorage methods
const people = [
  { id: 1, name: 'Paul', age: 34 },
  { id: 2, name: 'Paula', age: 44 },
  { id: 3, name: 'Paulette', age: 34 },
];
localStorage.setItem("task", "Running")
localStorage.setItem("age", JSON.stringify(22))
localStorage.setItem('people', JSON.stringify(people));
localStorage.setItem("person", JSON.stringify({name: "Paul", age: 25}))

// console.log(localStorage.getItem("age"));
// console.log(JSON.parse(localStorage.getItem("age")))

const localPeople = JSON.parse(localStorage.getItem('people'));
// console.log(localPeople);

const newPeople = localPeople.filter((person) => person.id !== 1);
// console.log(newPeople);

localStorage.setItem("people", JSON.stringify(newPeople))

localStorage.removeItem("age");
localStorage.removeItem("person");
localStorage.removeItem("task");




