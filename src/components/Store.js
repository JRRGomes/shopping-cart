import React, { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

import "../styles/elements/_button.css";
import "../styles/elements/_button-container.css";

const Store = () => {

  const [elements, setElements] = useState('products');

  return (
    <>
      <h1>My store</h1>
      <div className="button-container">
        <button className="button" onClick={() => setElements('products')}>Products</button>
        <button className="button" onClick={() => setElements('cart')}>Cart</button>
      </div>
      <ul>
        {elements === 'products' && <ProductsList />}
        {elements === 'cart' && <Cart />}
      </ul>
    </>
  )
}

export default Store;
