import { fetchProducts } from "./network/fakeStoreApi.js";
import { displayProducts } from "./ui/displayProducts.js";
import { totalCartPrice } from "./ui/totalCartPrice.js";

const initializeApp = async () => {
    const products = await fetchProducts();
    console.log(products)
    displayProducts(products);
    totalCartPrice();
}

initializeApp()