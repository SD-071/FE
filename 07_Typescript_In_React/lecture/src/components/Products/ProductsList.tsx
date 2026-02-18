import {Link} from "react-router-dom";
import { useFetch } from "../../hooks";
import { ProductsArraySchema } from "../../schema";
import {Loading, ErrorMessage } from "..";

function ProductsList() {
    const { data, error, loading } = useFetch('https://fakestoreapi.com/products', ProductsArraySchema);
  
  if(loading) return <Loading message="Loading..." />
  if(error) return <ErrorMessage error={error} />
    return (
    <div>
        <ul>
            {data?.map(p => <Link key={p.id} to={`/products/${p.id}`}><li>{p.title}</li></Link>)}
        </ul>
    </div>
  )
}

export default ProductsList