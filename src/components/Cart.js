import CartItem from "./CartItem";

import '../styles/elements/_button.css'

const Cart = ({ cartItems, removeFromCart, showCheckout }) => {
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
        ))}
      <button className="button" onClick={showCheckout}>Checkout</button>
    </>
  )
};

export default Cart;
