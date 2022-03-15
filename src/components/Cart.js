const cart = [];

const ProductsList = () => {
  return cart.map(() => (
    <div key={cart.id}>{cart}</div>
    ))
};

export default ProductsList;
