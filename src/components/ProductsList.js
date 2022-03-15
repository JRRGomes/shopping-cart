import Product from "./Product";

const ProductsList = ({ products, addToCart }) => {
  return products.map((product) => (
    <Product product={product}/>
    ))
};

export default ProductsList;
