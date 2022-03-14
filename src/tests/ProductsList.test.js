import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "../components/ProductsList";

describe("ProductsList", () => {
  
  it("should render the product name", () => {
    const products = [
      {
        name: 'Product-1',
        description: 'this is the first product'
      }
    ];
    render(<ProductsList />)
    expect(screen.queryAllByText(products[0].name)).toBeInTheDocument;
  });
  it("should render the product description", () => {
    const products = [
      {
        name: 'Product-1',
        description: 'this is the first product'
      }
    ];
    render(<ProductsList />)
    expect(screen.queryAllByText(products[0].description)).toBeInTheDocument;
  });
});
