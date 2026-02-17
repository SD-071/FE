import { CartDisplay, CartSide } from '../components';

function Cart() {

  return (
    <div className='flex flex-wrap-reverse xs:flex-nowrap md:flex-nowrap gap-1 md:justify-center'>
      <CartDisplay />
      <CartSide />
    </div>
  );
   
}

export default Cart