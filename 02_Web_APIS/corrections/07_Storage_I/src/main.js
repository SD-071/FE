const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

const createLiItem = (quote) => {
    const li = document.createElement("li");
    li.textContent = quote;

    return li;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value.trim();

    if(!userInput) return alert("Please enter something in the field!");

    const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
    
    quotes.unshift(userInput);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    
    const newLi = createLiItem(userInput);
    ul.insertBefore(newLi, ul.firstElementChild);

    form.reset();
})

reloadBtn.addEventListener("click", () => {
    window.location.reload();
})

window.addEventListener("load", () => {
     const quotes = JSON.parse(localStorage.getItem('quotes')) || [];

     quotes.forEach((quote) => {
        const newLi = createLiItem(quote);
        ul.appendChild(newLi);
     })
})
