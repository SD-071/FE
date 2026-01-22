import { getCart } from "./storage/cartStorage.js";
import { displayProducts } from "./ui/displayProducts.js";
import { totalCartPrice } from "./ui/totalCartPrice.js";

const initializeApp = () => {
    const products = getCart();
    console.log(products)
    displayProducts(products, "cart");
    totalCartPrice();
}

initializeApp()