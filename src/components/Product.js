const Product = ({ product, addToCart }) => {
  return (
  <>
    <div>{product.name}: {product.description}</div>
    {addToCart && <button className="button" onClick={()=>addToCart(product)}>Add to cart</button>}
  </>
  )
}

export default Product;
