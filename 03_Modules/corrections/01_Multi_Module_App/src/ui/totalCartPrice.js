import { getCart } from "../storage/cartStorage.js";

export const totalCartPrice = () => {
    const cart = getCart();
    const totalPrice = cart.reduce((acc, product) => acc + product.totalPrice, 0);
    
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = `$${totalPrice}`;
};