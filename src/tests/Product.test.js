import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "../components/Product";

describe("Product", () => {
  const product = {
      name: 'Product-1',
      description: 'this is the first product'
    };
  it("should render the products first object name and description", () => {
    render(<Product product={product} />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });

  it("should render a add to cart button", () => {
    render(<Product product={product} />)
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
  });
});
