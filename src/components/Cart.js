import CartItem from "./CartItem";
import { Button } from "../components";

import '../styles/elements/_button.css'

const Cart = ({ cartItems, removeFromCart, showCheckout }) => {
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
        ))}
      <Button onClick={showCheckout}>Checkout</Button>
    </>
  )
};

export default Cart;
