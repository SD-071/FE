import { useState } from 'react';
import { ProductsContext } from '.';

function ProductsStates({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <ProductsContext
      value={{
        products,
        setProducts,
        product,
        setProduct,
        categories,
        setCategories,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </ProductsContext>
  );
}

export default ProductsStates;
