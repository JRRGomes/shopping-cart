
const CartItem = ({ item, removeFromCart }) => {
  return <div>{item.name}: {item.description}</div>
};

export default CartItem;
