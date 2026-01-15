// Selecting items
const heading = document.querySelector(".hero-content h1");
const navLinks = document.querySelectorAll(".nav-list a");
const btn = document.querySelector(".btn");
const header = document.querySelector(".header")
const heroContent = document.querySelector(".hero-content")

console.log(heading);
console.log(navLinks)
console.log(btn);

// Modify Style
header.style.backgroundColor = '#b5651d';
heading.style.fontSize = "3rem";
navLinks.forEach((link) => (link.style.color = '#faf0e6'));

// Add content
const p = document.createElement("p");
p.textContent = 'Open daily from 7 AM to 9 PM.';

heroContent.appendChild(p);