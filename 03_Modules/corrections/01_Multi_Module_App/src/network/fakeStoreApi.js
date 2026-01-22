export const fetchProducts = async () => {
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const products = await res.json();
        return products;
    }catch(err){
        console.error("Network failed: ", err)
    }
}
