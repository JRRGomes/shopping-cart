import { render, screen } from "@testing-library/react";
import Review from "../components/Checkout/Review";

const formValues = {
  "name": "Jeff",
  "lastName": "Gomes",
  "addressFirst": "First street",
  "addressSecond": "second house",
  "zip": "123",
  "city": "teresina",
  "country": "Brazil",
  "province": "Piaui",
  "cardName": "JRRG",
  "cardNumber": "9876-5432-1236-6544",
  "expDate": "12",
  "ccv": "321"
}

describe("Review", () => {
  beforeEach(() => {
    render(<Review formValues={formValues}/>);
  });

  it("should render order summary text", () => {
    expect(screen.getByText('Order summary')).toBeInTheDocument();
  });

  describe("when rendering the shipping and payment details", () => {
    it("should render the shipping text", () => {
      expect(screen.getAllByText('Shipping')[1]).toBeInTheDocument();
    });

    it("should render the correct shipping value Name", () => {
      expect(screen.getByText(/jeff gomes/i)).toBeInTheDocument();
    });

    it("should render the correct shipping value Address", () => {
      expect(screen.getByText(/First street, second house/i)).toBeInTheDocument();
    });

    it("should render the correct card name value", () => {
      expect(screen.getByText(/JRRG/i)).toBeInTheDocument();
    });

    it("should render the correct card number value", () => {
      expect(screen.getByText(/xxxx\-xxxx\-xxxx\-6544/i)).toBeInTheDocument();
    });

    it("should render the correct card expire date value", () => {
      expect(screen.getByText(/12/i)).toBeInTheDocument();
    });
  });
});
