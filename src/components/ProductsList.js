const ProductsList = ({ products }) => {
  return products.map(({name, description}) => (
    <div key={products.id}>{name}: {description}</div>
    ))
};

export default ProductsList;
