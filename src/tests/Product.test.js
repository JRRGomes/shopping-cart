import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Product from "../components/Product";

const product = {
    name: 'Product-1',
    description: 'this is the first product'
  };

describe("Product", () => {
  it("should render the products first object name and description", () => {
    render(<Product product={product} />)
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });

  it("should render a add to cart button", () => {
    const addToCart = jest.fn();
    render(<Product product={product} addToCart={addToCart}/>)
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
  });

  describe("When add to cart button is clicked", () => {
    it("should dispatch addToCart function", () => {
      const addToCart = jest.fn();
      render(<Product product={product} addToCart={addToCart}/>);
      userEvent.click(screen.getByRole('button', { name: 'Add to cart' }))
  
      expect(addToCart).toHaveBeenCalledTimes(1);
      expect(addToCart).toHaveBeenCalledWith(product);
    });
  });

  describe('when addToCart is not passed', () => {
    it('does not render add to cart button', () => {
      render(<Product product={product}/>)
      expect(screen.queryByText('button', { name: 'Add to cart' })).not.toBeInTheDocument();
    });
  });
});
