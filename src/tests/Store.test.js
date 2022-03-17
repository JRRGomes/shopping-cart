import Store from "../components/Store";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Store", () => {
  it("should render one product name and description", () => {
    render(<Store />);
    expect(screen.getByText('Product-2: this is the second product' )).toBeInTheDocument();
  });

  describe("When clicking on Add to cart button", () => {
    render(<Store />);
    userEvent.click(screen.queryAllByRole('button', { name: 'Add to cart' })[0]);
    userEvent.click(screen.getByRole('button', { name: 'Cart' }));
    expect(screen.getByText('Product-1: this is the first product' )).toBeInTheDocument();
  })
});
