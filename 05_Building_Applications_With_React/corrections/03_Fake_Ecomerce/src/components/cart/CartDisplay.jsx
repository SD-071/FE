import { useCart } from "../../contexts";
import { CartItem, CartDetails } from "..";
function CartDisplay() {
  const {cartState} = useCart();
  return (
    <div className='w-4/5 m-2 rounded p-4 flex flex-col gap-4 shadow-xs/50 shadow-gray-400 bg-base-300'>
      <div className='mb-4 border-b pb-2 flex justify-between items-end'>
        <h2 className='text-2xl font-bold'>Shopping Cart</h2>
        <small className='text-gray-400 text-[8px]'>price</small>
      </div>
        {cartState.cart.length > 0 ? cartState.cart.map((p) => <CartItem product={p} />) : <h2 className='text-2xl font-bold'>Your cart is empty</h2>}
        <CartDetails hidden="hidden" />
    </div>
  );
}

export default CartDisplay;
