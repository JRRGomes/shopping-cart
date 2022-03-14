const products = [
  {
    name: 'Product-1',
    description: 'this is the first product'
  }
];

const ProductsList = () => {
  return (
    <>
      {products.map(({name, description}) => (
        <li key={products.id}>{name}: {description}</li>
      ))}
    </>
  )
};

export default ProductsList;
