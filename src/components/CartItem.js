
const CartItem = ({ item, removeFromCart }) => {
  return (
    <>
    <div>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <button className="button" onClick={()=>removeFromCart(item.id)}>Remove from cart</button>
    </div>
    </>
  )
};

export default CartItem;
