import { useProducts } from '../contexts';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components';

function CategoriesProducts() {
  const { products } = useProducts();
  const { category } = useParams();

  return (
    <div className='flex flex-wrap justify-items-center gap-3 p-3'>
      {products && products.filter((p) => p.category === category).map((p) => <ProductCard product={p} />)}
    </div>
  );
}

export default CategoriesProducts;
