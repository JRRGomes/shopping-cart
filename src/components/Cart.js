import CartItem from "./CartItem";

const Cart = ({ cartItems, removeFromCart }) => {
  return cartItems.map((item) => (
    <CartItem key={item.id} item={item}/>
    ))
};

export default Cart;
