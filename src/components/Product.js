const Product = ({ product, addToCart }) => {
  return (
  <>
    <div key={product.id}>{product.name}: {product.description}</div>
    <button className="button" onClick={()=>addToCart(product)}>Add to cart</button>
  </>
  )
}

export default Product;
