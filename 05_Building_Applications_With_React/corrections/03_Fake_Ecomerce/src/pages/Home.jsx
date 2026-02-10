import { useProducts } from "../contexts";
import { ProductCard } from "../components";

function Home() {
  const {products} = useProducts()
  return (
    <div className='flex flex-wrap justify-items-center gap-3 p-3'>
      {products && products.map(p => <ProductCard product={p} />)}
    </div>

  );
}

export default Home;
