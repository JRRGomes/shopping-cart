import React, { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

import "../styles/elements/_button.css";
import "../styles/elements/_button-container.css";

const PRODUCTS = [
  {
    id: 1,
    name: 'Product-1',
    description: 'this is the first product'
  },
  {
    id: 2,
    name: 'Product-2',
    description: 'this is the second product'
  },
  {
    id: 3,
    name: 'Product-3',
    description: 'this is the third product'
  }
];

const Store = () => {

  const [elementKey, setelementKey] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.includes(product)) {
      setCartItems([...cartItems, product])
    }
  }

  const removeFromCart = (id) => {
    const currentCart = cartItems.filter(item => item.id !== id);
    setCartItems(currentCart);
  }

  return (
    <>
      <h1>My store</h1>
      <div className="button-container">
        <button className="button" onClick={() => setelementKey('products')}>Products</button>
        <button className="button" onClick={() => setelementKey('cart')}>Cart</button>
      </div>
      {elementKey === 'products' && <ProductsList products={PRODUCTS} addToCart={addToCart}/>}
      {elementKey === 'cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}
    </>
  )
}

export default Store;
