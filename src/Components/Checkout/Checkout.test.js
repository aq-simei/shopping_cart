import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../Checkout";

describe("Checkout component", () => {
  it("Renders the shipping address form by default", () => {
    render(<Checkout />);
    const selectorFromShippingAddressForm = screen.getByText(
      "Use this address for payment details"
    );
    expect(selectorFromShippingAddressForm).toBeInTheDocument();
  });

  it("Render the Payment details after the shipping address form", () => {
    render(<Checkout />);
    const nextButton = screen.getByRole("button", { name: /Next/i });
    userEvent.click(nextButton);

    const selectorFromPaymentDetailsForm = screen.getByText(
      "Remember credit card details for next time"
    );

    expect(selectorFromPaymentDetailsForm).toBeInTheDocument();
  });

  it("Render the Review your order as a last step of the form", () => {
    render(<Checkout />);
    const nextButton = screen.getByRole("button", { name: /Next/i });
    userEvent.click(nextButton);
    userEvent.click(nextButton);

    const placeOrderButton = screen.getByRole("button", {
      name: /PLACE ORDER/i,
    });
    expect(placeOrderButton).toBeInTheDocument();
  });
});
