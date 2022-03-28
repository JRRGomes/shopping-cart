import React, { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import PRODUCTS from "../constants/products.json"

import "../styles/elements/_button.css";
import "../styles/elements/_button-container.css";

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

  const showCheckout = () => {
    setelementKey('checkout')
  }

  return (
    <>
      <h1>My store</h1>
      <div className="button-container">
        <button className="button" onClick={() => setelementKey('products')}>Products</button>
        <button className="button" onClick={() => setelementKey('cart')}>Cart</button>
      </div>
      {elementKey === 'products' && <ProductsList products={PRODUCTS} addToCart={addToCart}/>}
      {elementKey === 'cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} showCheckout={showCheckout}/>}
      {elementKey === 'checkout' && <Checkout cartItems={cartItems}/>}
    </>
  )
}

export default Store;
