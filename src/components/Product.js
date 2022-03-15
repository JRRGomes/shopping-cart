const Product = ({ product, addToCart }) => {
  console.log(product)
  return <div key={product.id}>{product.name}: {product.description}</div>
}

export default Product;
