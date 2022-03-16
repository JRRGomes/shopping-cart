const ProductsList = ({ cartItems }) => {
  return cartItems.map((item) => (
    <div key={item.id}>{item.name}: {item.description}</div>
    ))
};

export default ProductsList;
