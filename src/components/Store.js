import React, { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import PRODUCTS from "../constants/products.json"
import { Button, Text } from '../components'
import { ThemeProvider } from 'styled-components';
import theme from '../theme';


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
      <ThemeProvider theme={theme}>
        <Text variant='h2'>My store</Text>
        <div className="button-container">
          <Button onClick={() => setelementKey('products')}>Products</Button>
          <Button onClick={() => setelementKey('cart')}>Cart</Button>
        </div>
        {elementKey === 'products' && <ProductsList products={PRODUCTS} addToCart={addToCart}/>}
        {elementKey === 'cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} showCheckout={showCheckout}/>}
        {elementKey === 'checkout' && <Checkout cartItems={cartItems}/>}
      </ThemeProvider>
    </>
  )
}

export default Store;
