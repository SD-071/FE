import {Button } from "..";
import { useCart } from "../../contexts";
import { formatingPrice } from "../../utils";

function CartDetails({ titleStyle = 'text-[10px]', btnStyle = 'text-[10px] btn-xs', hidden = '' }) {
  const {cartState} = useCart();
  return (
    <div className='card gap-2 rounded bg-base-300 h-fit' extraStyles='gap-2'>
      <h2 className={`card-title ${titleStyle}`}>
        Subtotal ({cartState.totalAmountProducts} items): {formatingPrice(cartState.totalPrice)}
      </h2>
      <label htmlFor='id' className={`text-[8px] mr-2 ${hidden}`}>
        <input type='checkbox' className='checkbox checkbox-neutral checkbox-xs p-1' id='id' name='name' /> There is a
        gift in this order
      </label>
      <Button
        text='Check out'
        className='btn'
        extraStyles={`${btnStyle} ${hidden}`}
        onClick={() => console.log('Proceed to checkout')}
      />
    </div>
  );
}

export default CartDetails;
