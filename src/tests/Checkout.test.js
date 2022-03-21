import Checkout from "../components/Checkout";
import { render, screen } from "@testing-library/react";

describe("Checkout", () => {
  it("should render Checkout text ", () => {
    render(<Checkout />);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });
  
  it("should render Shipping address text ", () => {
    render(<Checkout />);
    expect(screen.getAllByText('Shipping address')[0]).toBeInTheDocument();
  });
});
