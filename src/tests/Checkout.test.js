import Checkout from "../components/Checkout";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Checkout", () => {
  it("should render Checkout text ", () => {
    render(<Checkout />);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });

  it("should render Shipping address text ", () => {
    render(<Checkout />);
    expect(screen.getAllByText('Shipping address')[1]).toBeInTheDocument();
  });

  describe("When clicking in Next", () => {
    it("should render payment method text ", () => {
      render(<Checkout />);
      userEvent.click(screen.getByRole('button', { name: 'Next' }));
      expect(screen.getByText('Payment method')).toBeInTheDocument();
    });
  });

  describe("When clicking in Next twice", () => {
    it("should render order summary text ", () => {
      render(<Checkout />);
      userEvent.click(screen.getByRole('button', { name: 'Next' }));
      userEvent.click(screen.getByRole('button', { name: 'Next' }));
      expect(screen.getByText('Order summary')).toBeInTheDocument();
    });
  });
});
