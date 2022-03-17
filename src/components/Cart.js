import Product from "./Product"

const Cart = ({ cartItems }) => {
  return cartItems.map((item) => (
    <Product key={item.id} product={item}/>
    ))
};

export default Cart;
