import { ButtonCounterContainer } from '../components';
import { useParams } from "react-router-dom";
import { useProducts, useCart } from '../contexts';
import { formatingPrice } from '../utils';

function ProductDetail() {
  const {id} = useParams();
  const { cartState } = useCart();
  const { products } = useProducts();
  const product = products.find((p) => p.id == id);
  const productInCart = cartState.cart.find((p) => p.id == id);
  
  console.log(product)
  return (
    product && (
      <div className='flex justify-center items-center min-h-[80vh] p-3 mb-2'>
        <div className='card items-center sm:flex-row sm:justify-between sm:items-center bg-neutral-500 shadow-xl sm:p-3 rounded-lg'>
          <div className='w-1/2 sm:w-1/3 px-1'>
            <figure className={`overflow-hidden h-full p-3`}>
              <img className='object-scale-down w-full h-full' src={product.image} alt={product.title} />
            </figure>
          </div>
          <div className='w-2/3 sm:w-1/2 flex flex-col justify-center px-1 gap-3 mb-3'>
            <h2 className='card-title text-gray-100 hover:text-secondary text-xs'>{product.title}</h2>
            <div className='card-body'>
              <div className='flex justify-around'>
                <p>
                  <strong className='text-gray-100 text-xs'>{product.rating.rate}</strong>
                </p>
                <p>
                  <strong className='text-gray-100 text-xs'>{formatingPrice(product.price)}</strong>
                </p>
              </div>
              <div className='mx-1 mt-2'>
                <h3 className='font-medium'>Details</h3>
                <small>{product.description}</small>
              </div>
            </div>
            <ButtonCounterContainer product={productInCart? productInCart : product} />
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
