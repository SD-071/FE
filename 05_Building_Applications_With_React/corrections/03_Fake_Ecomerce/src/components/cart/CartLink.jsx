import { useCart } from "../../contexts";
import {Link} from "react-router-dom";

function CartLink() {
    const {cartState } = useCart();
  return (
    <Link to={`/cart`}>Cart({cartState.totalAmountProducts})</Link>
  )
}

export default CartLink;