const Product = ({ product, addToCart }) => {
  return <div key={product.id}>{product.name}: {product.description}</div>
}

export default Product;
