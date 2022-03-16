import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "../components/ProductsList";

describe("ProductsList", () => {
  
  it("should render the product name and description", () => {
    const products = [
      {
        name: 'Product-1',
        description: 'this is the first product'
      }
    ];
    render(<ProductsList products={products} />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });
});
