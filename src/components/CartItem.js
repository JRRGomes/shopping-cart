
const CartItem = ({ item, removeFromCart }) => {
  return (
    <>
    <div>{item.name}: {item.description}</div>
    <button className="button" onClick={()=>removeFromCart(item)}>Remove from cart</button>
  </>
  )
};

export default CartItem;
