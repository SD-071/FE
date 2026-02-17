import { CartDetails } from '..';

function CartSide() {
  return (
    <div className='card bg-base-300 h-fit w-1/4 p-2 m-2'>
      <CartDetails titleStyle='text-[10px]' btnStyle='text-[10px] btn-xs' />
    </div>
  );
}

export default CartSide;
