
const CartItem = ({ item, removeFromCart }) => {
  return (
    <>
      <div>{item.name}: {item.description}</div>
      <button className="button" onClick={()=>removeFromCart(item.id)}>Remove from cart</button>
    </>
  )
};

export default CartItem;
