import { getCart, updateCart } from "../storage/cartStorage.js";
import { totalCartPrice } from "./totalCartPrice.js";

export const addToCart = (product) => {
    const button = document.createElement("button");
    button.className = "'cart-button px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-600'";
    button.textContent = "Add to cart";
    button.addEventListener("click", () => {
        updateCart(product, "add");
        const newCart = getCart();
        const existingProduct = newCart.find((item) => item.id === product.id);

        if(existingProduct) {
            const buttons = cartButtons(existingProduct);
            button.parentElement.appendChild(buttons);
            button.remove();
        }
        totalCartPrice();
    })
    return button;
}

export const cartButtons = (product, element) => {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'cart-buttons flex items-center gap-2';

    const span = document.createElement("span");
    span.textContent = product.quantity;

    const addButton = document.createElement("button");
    addButton.textContent = "+"
    addButton.className = 'px-2 py-1 bg-pink-500 text-white rounded hover:bg-pink-600';
    addButton.addEventListener("click", () => {
        updateCart(product, "add");
        const newCart = getCart();
        const existingProduct = newCart.find((item) => item.id === product.id);
        if(existingProduct) {
            span.textContent = existingProduct.quantity;
        }
        totalCartPrice();
    })

    const removeButton = document.createElement("button");
    removeButton.textContent = '-';
    removeButton.className = 'px-2 py-1 bg-pink-500 text-white rounded hover:bg-pink-600';
    removeButton.addEventListener('click', () => {
      updateCart(product, 'remove');
      const newCart = getCart();
      const existingProduct = newCart.find((item) => item.id === product.id);
      
      if (existingProduct && existingProduct.quantity >= 1) {
        span.textContent = existingProduct.quantity;
      } else {
        const button = addToCart(product);
        console.log(buttonsContainer.parentElement);
        buttonsContainer.parentElement.appendChild(button);
        buttonsContainer.remove();
        
        if(element) {
            element.remove()
        }
      }
      totalCartPrice();
    });

    buttonsContainer.appendChild(removeButton);
    buttonsContainer.appendChild(span);
    buttonsContainer.appendChild(addButton);

    return buttonsContainer;
}