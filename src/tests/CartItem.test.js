import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/CartItem";

const item = {
    id: 1,
    name: 'Product-1',
    description: 'this is the first product'
  };

describe("CartItem", () => {
  it("should render the cart item name and description", () => {
    render(<CartItem item={item} />)
    expect(screen.getByText('Product-1: this is the first product')).toBeInTheDocument();
  });

  it("should render a remove from cart button", () => {
    const removeFromCart = jest.fn();
    render(<CartItem item={item} removeFromCart={removeFromCart}/>)
    expect(screen.getByRole('button', { name: 'Remove from cart' })).toBeInTheDocument();
  });

  describe("When remove from cart button is clicked", () => {
    it("should dispatch addToCart function", () => {
      const removeFromCart = jest.fn();
      render(<CartItem item={item} removeFromCart={removeFromCart}/>);
      userEvent.click(screen.getByRole('button', { name: 'Remove from cart' }))
  
      expect(removeFromCart).toHaveBeenCalledTimes(1);
      expect(removeFromCart).toHaveBeenCalledWith(item.id);
    });
  });
});
