import Product from "./Product";

const ProductsList = ({ products, addToCart }) => {
  return products.map((product) => (
    <Product key={product.id} product={product} addToCart={addToCart}/>
    ))
};

export default ProductsList;
