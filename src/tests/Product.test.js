import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "../components/Product";

describe("Product", () => {
  it("should render the products first object name and description", () => {
    const product = {
        name: 'Product-1',
        description: 'this is the first product'
      };
    render(<Product product={product} />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });
});
