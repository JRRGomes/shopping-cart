import Product from "./Product";

const ProductsList = ({ products, addToCart }) => {
  return products.map((product) => (
    <Product product={product} addToCart={addToCart}/>
    ))
};

export default ProductsList;
