import React, { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

import "../styles/elements/_button.css";
import "../styles/elements/_button-container.css";

const Store = () => {

  const [elementKey, setelementKey] = useState('products');

  return (
    <>
      <h1>My store</h1>
      <div className="button-container">
        <button className="button" onClick={() => setelementKey('products')}>Products</button>
        <button className="button" onClick={() => setelementKey('cart')}>Cart</button>
      </div>
      {elementKey === 'products' && <ProductsList />}
      {elementKey === 'cart' && <Cart />}
    </>
  )
}

export default Store;
