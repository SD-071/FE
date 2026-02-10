import { createContext, useContext } from "react";

export const ProductsContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if(!context) {
        throw new Error("useProducts can only be used within the ProductsState");
    }
    return context;
}