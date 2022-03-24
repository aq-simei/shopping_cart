import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../Checkout";

describe("Checkout component", () => {
  beforeEach(() => {
    render(<Checkout />);
    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });
    const address1Input = screen.getByRole("textbox", {
      name: /address line 1/i,
    });
    const zipInput = screen.getByRole("textbox", {
      name: /zip \/ postal code/i,
    });
    const cityInput = screen.getByRole("textbox", {
      name: /city/i,
    });

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(address1Input, { target: { value: "123 Main St" } });
    fireEvent.change(zipInput, { target: { value: "12345" } });
    fireEvent.change(cityInput, { target: { value: "Anytown" } });
  });
  it("Renders the shipping address form by default", () => {
    const shippingAddressHeading = screen.getByRole("heading", {
      name: "Shipping address",
    });
    expect(shippingAddressHeading).toBeInTheDocument();
  });

  describe("While form inputs are invalid", () => {
    it.only("Render a disabled next button", () => {
      const invalidNextButton = screen.getByRole("button", {
        name: /Next/i,
        "aria-disabled": "true",
      });

      expect(invalidNextButton).toBeDisabled();
    });
  });
  describe("While form inputs are valid", () => {
    it("Renders an enabled next button", () => {
      const countrySelector = screen.getByRole("button", {
        name: /country/i,
      });
      const stateSelector = screen.getByRole("button", {
        name: /state/i,
      });

      userEvent.click(countrySelector);

      userEvent.click(stateSelector);

      const argentinaOption = screen.getByRole("option", {
        name: /argentina/i,
      });

      userEvent.click(argentinaOption);

      const nextButton = screen.getByRole("button", { name: /Next/i });

      expect(nextButton).toBeInTheDocument();
    });
    describe("When the Next Button is clicked once", () => {
      it("Renders the Payment method form", () => {
        const countrySelector = screen.getByRole("button", {
          name: /country/i,
        });
        const stateSelector = screen.getByRole("button", {
          name: /state/i,
        });

        userEvent.click(countrySelector);

        const argentinaOption = screen.getByRole("option", {
          name: /argentina/i,
        });
        userEvent.click(argentinaOption);

        userEvent.click(stateSelector);

        const buenosAiresCapitalOption = screen.getByRole("option", {
          name: /buenos aires capital/i,
        });

        userEvent.click(buenosAiresCapitalOption);

        const nextButton = screen.getByRole("button", { name: /Next/i });

        userEvent.click(nextButton);
        const paymentMethodHeading = screen.getByRole("heading", {
          name: /payment method/i,
        });
        expect(paymentMethodHeading).toBeInTheDocument();
      });
      describe("While the Payment Form inputs are invalid", () => {
        it("Renders a disabled button", () => {
          expect(nextButton).toBeDisabled();
        });
      });
    });
    describe("When the Next Button is clicked twice", () => {
      it("Renders the Order Summary", () => {
        const countrySelector = screen.getByRole("button", {
          name: /country/i,
        });
        const stateSelector = screen.getByRole("button", {
          name: /state/i,
        });

        userEvent.click(countrySelector);

        const argentinaOption = screen.getByRole("option", {
          name: /argentina/i,
        });
        userEvent.click(argentinaOption);

        userEvent.click(stateSelector);

        const buenosAiresCapitalOption = screen.getByRole("option", {
          name: /buenos aires capital/i,
        });

        userEvent.click(buenosAiresCapitalOption);

        const nextButton = screen.getByRole("button", { name: /Next/i });

        userEvent.click(nextButton);
        const paymentMethodHeading = screen.getByRole("heading", {
          name: /payment method/i,
        });
        userEvent.click(nextButton);
        const orderSummaryHeading = screen.getByRole("heading", {
          name: /order summary/i,
        });
        expect(orderSummaryHeading).toBeInTheDocument();
      });
    });
  });
});
