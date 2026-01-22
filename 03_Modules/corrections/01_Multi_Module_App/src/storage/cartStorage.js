export const storeCart = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
}

export const getCart = () => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    return data;
}

export const updateCart = (newItem, method) => {
    const cart = getCart();
    const existingProduct = cart.find((product) => product.id === newItem.id);

    if(!existingProduct && method === "add") {
        const product = {...newItem, quantity: 1, totalPrice: newItem.price};
        cart.push(product);
        storeCart(cart);
        return;
    }

    if(existingProduct && method === "add") {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
        const existingProductIndex = cart.indexOf(existingProduct);
        cart[existingProductIndex] = existingProduct;
        storeCart(cart);
        return;
    }

    if(existingProduct.quantity === 1 && method === "remove") {
        const updatedCart = cart.filter((product) => product.id != existingProduct.id);
        storeCart(updatedCart); 
        return;
    }

    if(existingProduct.quantity > 1 && method === "remove") {
        existingProduct.quantity -= 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
        const existingProductIndex = cart.indexOf(existingProduct);
        cart[existingProductIndex] = existingProduct;
        storeCart(cart);
        return;
    }
}