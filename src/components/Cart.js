const cart = [];

const ProductsList = () => {
  return (
    <>
      {cart.map(() => (
        <li key={cart.id}>{cart}</li>
      ))}
    </>
  )
};

export default ProductsList;
