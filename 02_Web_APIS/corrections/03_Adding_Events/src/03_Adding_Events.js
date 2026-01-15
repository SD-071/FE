const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];
// selecting elements
const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

// Adding events
addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  const index = Math.floor(Math.random() * 10);
  newItem.textContent = tasks[index];
  itemList.appendChild(newItem);
  itemList.scrollTop = itemList.scrollHeight;
})

alertBtn.addEventListener("click", () => alert("Here is an alert!"))

consoleBtn.addEventListener("click", () => console.log("I have been clicked"))