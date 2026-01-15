// Select elements
const form = document.getElementById('contact-form');
const outputP = document.getElementById('output');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // validation of fields
    if(!name || !email || !message) {
        outputP.textContent = "Please, fill all the fields!";
        outputP.classList.remove("bg-green-500")
        outputP.classList.add("bg-red-500");
        return;
    }

    // Output data

    const listData = document.createElement("ul");
    
    const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${name}`

    const emailItem = document.createElement('li');
    emailItem.textContent = `Name: ${email}`;

    const messageItem = document.createElement('li');
    messageItem.textContent = `Name: ${message}`;

    listData.appendChild(nameItem);
    listData.appendChild(emailItem);
    listData.appendChild(messageItem);

    outputP.appendChild(listData)
    outputP.classList.remove('bg-red-500');
    outputP.classList.add("bg-green-500");
    form.reset()
})