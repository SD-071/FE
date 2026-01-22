import { createProductCard } from './productCard.js';

export const displayProducts = (products, page) => {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = "";

    if(products.lenght === 0 && page === "cart") {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "text-center text-gray-600";
        emptyMessage.textContent = "Your cart is empty."
        productsContainer.appendChild(emptyMessage);
        return;
    }
    
    products.forEach((product) => {
        const productCart = createProductCard(product, page);
        productsContainer.appendChild(productCart);
    })
}