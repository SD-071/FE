const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

// create the li item for the display
const createLiItem = (newItem) => {
    const li = document.createElement("li");
    li.setAttribute("id", newItem.id);
    li.textContent = newItem.content;
    li.classList.add('flex', 'items-center', 'justify-between', 'w-full', 'my-2');

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('px-4', 'py-2', 'bg-red-500', 'hover:bg-red-400', 'text-white', 'rounded');
    deleteBtn.addEventListener("click", () => {
        li.remove();
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== newItem.id)));
    })

    li.appendChild(deleteBtn);

    return li;
}

// submition form

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value.trim();

    if(!userInput) return alert("Please, fill the empty field!");

    const newTask = {
      id: `task-${crypto.randomUUID().replaceAll('-', '')}`,
      content: userInput,
    };

    const newLi = createLiItem(newTask);
    ul.insertBefore(newLi, ul.firstElementChild);

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.unshift(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    form.reset();
})

reloadBtn.addEventListener("click", () => {
    window.location.reload();
});

window.addEventListener("load", () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => {
        const newLi = createLiItem(task);
        ul.appendChild(newLi);
    })
})