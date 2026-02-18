import { useParams } from 'react-router-dom';
import { ProductSchema } from '../../schema';
import { useFetch } from '../../hooks';
import { Loading, ErrorMessage } from '..';

function ProductDetails() {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://fakestoreapi.com/products/${id}`, ProductSchema);

  if (loading) return <Loading message='Loading...' />;
  if (error) return <ErrorMessage error={error} />;
  return (
    data && (
      <div className='card flex-row items-center'>
        <figure className='h-40 w-1/3'>
          <img className='object-scale-down h-full w-full' src={data.image} alt={data.title} />
        </figure>
        <div className='card-body w-2/3'>
          <h2 className='card-title'>{data.title}</h2>
          <div className='flex gap-1'>
            <p>
              <strong>${data.price}</strong>
            </p>
            <p>
              <strong>{data.rating.rate}</strong>
            </p>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
    )
  );
}

export default ProductDetails;
