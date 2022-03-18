import Store from "../components/Store";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Store", () => {
  it("should render products name and description", () => {
    render(<Store />);
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  });

  describe("When clicking on Add to cart button", () => {
    it("should add the first product to the cart", () => {
      render(<Store />);
      userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
      userEvent.click(screen.getByRole('button', { name: 'Cart' }));
      expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
    });
  });
  
  describe("When clicking on remove from cart button", () => {
    it("should remove the added product from the cart", () => {
      render(<Store />);
      userEvent.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
      userEvent.click(screen.getByRole('button', { name: 'Cart' }));
      expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  
      userEvent.click(screen.getByRole('button', { name: 'Remove from cart' }));
      expect(screen.queryByText('Product-1: this is the first product' )).not.toBeInTheDocument();
    });
  });
});
