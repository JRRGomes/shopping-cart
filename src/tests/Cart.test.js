import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

describe("Cart", () => {
  it("should render the products first object name and description", () => {
    const cartItems = [
      {
        name: 'Product-1',
        description: 'this is the first product'
      }
    ];
    render(<Cart cartItems={cartItems} />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });
});
