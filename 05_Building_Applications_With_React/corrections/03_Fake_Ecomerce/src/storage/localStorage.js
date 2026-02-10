export const saveCart = (value) => {
    localStorage.setItem('cart', JSON.stringify(value));
};

export const getCart = () => {
    const item = localStorage.getItem('cart');
    return item ? JSON.parse(item) : [];
};

export const updateCart = (value, method) => {
    const cart = getCart();
    let updatedCart;
    if (method === 'add') {
        updatedCart = [{ ...value, qty: 1, totalAmount: value.price }, ...cart];
    } else if (method === 'remove') {
        if (cart.length === 1) {
            localStorage.removeItem('cart');
            return;
        }
        updatedCart = cart.filter((p) => p.id !== value.id);
    } else if (method === 'increase') {
        updatedCart = cart.map((p) =>
            p.id === value.id ? { ...p, qty: p.qty + 1, totalAmount: p.price * (p.qty + 1) } : p,
        );
    } else if (method === 'decrease') {
        updatedCart = cart.map((p) =>
            p.id === value.id ? { ...p, qty: p.qty - 1, totalAmount: p.price * (p.qty - 1) } : p,
        );
    }
    saveCart(updatedCart);
}