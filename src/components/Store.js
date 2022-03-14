import React, { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

const Store = () => {

  const [elements, setElements] = useState('products');

  return (
    <>
      <h1>My store</h1>
      <button onClick={() => setElements('products')}>Products</button>
      <button onClick={() => setElements('cart')}>Cart</button>
      <ul>
        {elements === 'products' && <ProductsList />}
        {elements === 'cart' && <Cart />}
      </ul>
    </>
  )
}

export default Store;
