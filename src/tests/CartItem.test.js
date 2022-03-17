import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "../components/CartItem";

const item = {
    name: 'Product-1',
    description: 'this is the first product'
  };

describe("CartItem", () => {
  it("should render the cart item name and description", () => {
    render(<CartItem item={item} />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });
});
