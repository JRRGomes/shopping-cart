import React, { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

import "../styles/elements/_button.css";
import "../styles/elements/_button-container.css";

const PRODUCTS = [
  {
    name: 'Product-1',
    description: 'this is the first product'
  }
];

const Store = () => {

  const addToCart = () => {}

  const [elementKey, setelementKey] = useState('products');

  return (
    <>
      <h1>My store</h1>
      <div className="button-container">
        <button className="button" onClick={() => setelementKey('products')}>Products</button>
        <button className="button" onClick={() => setelementKey('cart')}>Cart</button>
      </div>
      {elementKey === 'products' && <ProductsList products={PRODUCTS} addToCart={addToCart} />}
      {elementKey === 'cart' && <Cart />}
    </>
  )
}

export default Store;
