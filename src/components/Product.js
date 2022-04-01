import { Button } from "../components";

const Product = ({ product, addToCart }) => {
  return (
  <>
    <div>{product.name}: {product.description}</div>
    {addToCart && <Button onClick={()=>addToCart(product)}>Add to cart</Button>}
  </>
  )
}

export default Product;
