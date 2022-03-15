import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "../components/ProductsList";

describe("ProductsList", () => {
  
  it("should render the product name and description", () => {
    render(<ProductsList />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });
});
