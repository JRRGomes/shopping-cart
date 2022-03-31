import { Button } from '../components'
 
const CartItem = ({ item, removeFromCart }) => {
  return (
    <>
      <div>{item.name}: {item.description}</div>
      <Button onClick={()=>removeFromCart(item.id)}>Remove from cart</Button>
    </>
  )
};

export default CartItem;
