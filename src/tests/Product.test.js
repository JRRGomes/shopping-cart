import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "../components/Product";

describe("Product", () => {
  it("should render the products first object name and description", () => {
    const PRODUCTS = [
      {
        name: 'Product-1',
        description: 'this is the first product'
      }
    ];
    render(<Product product={PRODUCTS[0]} />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });
});
