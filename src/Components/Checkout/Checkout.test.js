import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../Checkout";

describe("Checkout component", () => {
  it("Renders the shipping address form by default", () => {
    render(<Checkout />);
    const shippingAddressHeading = screen.getByRole("heading", {
      name: "Shipping address",
    });
    expect(shippingAddressHeading).toBeInTheDocument();
  });

  it("Renders the Payment method", () => {
    render(<Checkout />);
    const nextButton = screen.getByText(/Next/i);
    userEvent.click(nextButton);

    const paymentMethodHeading = screen.getByRole("heading", {
      name: "Payment method",
    });

    expect(paymentMethodHeading).toBeInTheDocument();
  });

  it("Render the Review your order as a last step of the form", () => {
    render(<Checkout />);
    const nextButton = screen.getByRole("button", { name: /Next/i });
    userEvent.click(nextButton);
    userEvent.click(nextButton);

    const orderSummaryHeading = screen.getByRole("heading", {
      name: "Order summary",
    });
    expect(orderSummaryHeading).toBeInTheDocument();
  });
});
