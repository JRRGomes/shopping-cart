const Product = ({ product, addToCart }) => {
  return (
  <>
    <div className="product-container">
      <div>{product.name}</div>
      <div>{product.description}</div>
      {addToCart && <button className="button button__add" onClick={()=>addToCart(product)}>Add to cart</button>}
    </div>
  </>
  )
}

export default Product;
