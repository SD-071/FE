import { useState, useReducer } from 'react';
import { CartContext } from '.';
import { getCart } from '../storage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'Add_To_Cart':
      return { ...state, cart: [{ ...action.product, qty: 1, totalAmount: action.product.price }, ...state.cart] };
    case 'Remove_From_Cart':
      return { ...state, cart: state.cart.filter((p) => p.id !== action.product.id) };
    case 'Increase':
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.product.id ? { ...p, qty: p.qty + 1, totalAmount: (p.qty + 1) * p.price } : p,
        ),
      };
    case 'Decrease':
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.product.id ? { ...p, qty: p.qty - 1, totalAmount: (p.qty - 1) * p.price } : p,
        ),
      };
  }
};

function CartStates({ children }) {
  const [cartState, cartDispatch] = useReducer(reducer, {
    cart: getCart(),
    totalAmountProducts: getCart().reduce(
      (acc, currentValue) => acc + currentValue.qty,
      0,
    ),
    totalPrice: getCart().reduce(
      (acc, currentValue) => acc + currentValue.totalAmount,
      0
    ),
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <CartContext
      value={{
        cartState,
        cartDispatch,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartStates;
