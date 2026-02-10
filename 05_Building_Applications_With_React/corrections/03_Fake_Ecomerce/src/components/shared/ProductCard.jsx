import { Link } from 'react-router-dom';
import { Button, ButtonCounterContainer } from '..';
import { useCart } from '../../contexts';
import { updateCart } from '../../storage';


function ProductCard({ product }) {
  const { cartState, cartDispatch } = useCart();
  const foundProduct = cartState.cart.find(p => p.id == product.id);
  const handleClick = () => {
    cartDispatch({ type: 'Add_To_Cart', product });
    updateCart(product, 'add');
  };
  return (
    <div className='card w-3xs bg-gray-300 text-primary'>
      <figure>
        <img src={product.image} alt={product.title} width={100} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product.title}</h2>
        <div className='flex'>
          <p>
            <strong>Price:</strong> {product.price}$
          </p>
          <h6 className='text-primary font-bold'>
            <Link to={`/product/${product.id}`}>See more</Link>
          </h6>
        </div>

        {!foundProduct && <Button text='Add To Cart' onClick={handleClick} />}
        {foundProduct?.qty > 0 && <ButtonCounterContainer product={foundProduct} />}
      </div>
    </div>
  );
}

export default ProductCard;
