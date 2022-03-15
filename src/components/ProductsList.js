const products = [
  {
    name: 'Product-1',
    description: 'this is the first product'
  }
];

const ProductsList = () => {
  return products.map(({name, description}) => (
    <div key={products.id}>{name}: {description}</div>
    ))
};

export default ProductsList;
