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

  describe("When clicking in Country select", () => {
    it("should render a country", () => {
      render(<Checkout />);
      userEvent.click(screen.getByRole('button', { name: 'Country *' }));
      expect(screen.getByText('Brazil')).toBeInTheDocument();
    });
  });

  describe("When clicking in State/Province select", () => {
    describe("with no country selected", () => {
      it("should render an empty list of states", () => {
        render(<Checkout />);
        userEvent.click(screen.getByRole('button', { name: 'State/Province/Region *' }));
        expect(screen.queryByText('Maranhão')).not.toBeInTheDocument();
      });
    });

    describe("with country Brazil selected", () => {
      it("should render brazil´s list of states", () => {
        render(<Checkout />);
        userEvent.click(screen.getByRole('button', { name: /country/i }));
        userEvent.click(screen.getByRole('option', { name: /brazil/i }));
        userEvent.click(screen.getByRole('button', { name: /state\/province\/region \*/i }));
        expect(screen.getByText(/maranhao/i)).toBeInTheDocument();
      });
    });
  });
});
