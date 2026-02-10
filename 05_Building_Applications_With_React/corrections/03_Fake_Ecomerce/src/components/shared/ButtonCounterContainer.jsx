import { Button } from '..';
import { useCart } from '../../contexts';
import { updateCart } from '../../storage';

function ButtonCounterContainer({ product }) {
  const { cartDispatch } = useCart();

  const removeClick = () => {
    if (product.qty === 1) {
      cartDispatch({ type: 'Remove_From_Cart', product });
      updateCart(product, 'remove');
    } else {
      cartDispatch({ type: 'Decrease', product });
      updateCart(product, 'decrease');
    }
  };

  const increaseClick = () => {
    cartDispatch({ type: 'Increase', product });
    updateCart(product, 'increase');
  };
  
  return (
    <div className='flex items-center justify-around'>
      <Button text='-' onClick={removeClick} />
      <span>{product.qty}</span>
      <Button text='+' onClick={increaseClick} />
    </div>
  );
}

export default ButtonCounterContainer;
