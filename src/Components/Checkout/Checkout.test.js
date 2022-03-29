import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../Checkout";

const fillOutPaymentForm = () => {
  const nameOnCardInput = screen.getByRole("textbox", {
    name: /name on card/i,
  });
  const cardNumberInput = screen.getByRole("textbox", { name: /card number/i });
  const expiryDateInput = screen.getByRole("textbox", { name: /expiry date/i });
  const cvvInput = screen.getByRole("textbox", { name: /cvv/i });

  userEvent.type(nameOnCardInput, "Johnathan Doe");
  userEvent.type(cardNumberInput, "1234-5676-7890-1232");
  userEvent.type(expiryDateInput, "02/20");
  userEvent.type(cvvInput, "321");
};
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

    userEvent.type(firstNameInput, "John");

    userEvent.type(address1Input, "123 Main St");

    userEvent.type(zipInput, "12345");

    userEvent.type(cityInput, "Anytown");
  });
  it("Renders the shipping address form by default", () => {
    const shippingAddressHeading = screen.getByRole("heading", {
      name: "Shipping address",
    });
    expect(shippingAddressHeading).toBeInTheDocument();
  });

  describe("While form inputs are invalid", () => {
    it("Render a disabled next button", () => {
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
      userEvent.click(countrySelector);

      const brazilOption = screen.getByRole("option", {
        name: /brazil/i,
      });
      userEvent.click(brazilOption);

      const stateSelector = screen.getByRole("button", {
        name: /state/i,
      });

      userEvent.click(stateSelector);

      const saoPauloOption = screen.getByRole("option", {
        name: /sao paulo/i,
      });

      userEvent.click(saoPauloOption);

      const nextButton = screen.getByRole("button", { name: /Next/i });

      expect(nextButton).toBeInTheDocument();
    });
    describe("When the Next Button is clicked once", () => {
      it("Renders the Payment method form", () => {
        const countrySelector = screen.getByRole("button", {
          name: /country/i,
        });

        userEvent.click(countrySelector);

        const argentinaOption = screen.getByRole("option", {
          name: /argentina/i,
        });

        userEvent.click(argentinaOption);

        const stateSelector = screen.getByRole("button", {
          name: /state/i,
        });
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
    });
    describe("While the Payment Form inputs are invalid", () => {
      it("Renders a disabled Next button", () => {
        const countrySelector = screen.getByRole("button", {
          name: /country/i,
        });
        userEvent.click(countrySelector);

        const brazilOption = screen.getByRole("option", {
          name: /brazil/i,
        });
        userEvent.click(brazilOption);

        const stateSelector = screen.getByRole("button", {
          name: /state/i,
        });

        userEvent.click(stateSelector);

        const saoPauloOption = screen.getByRole("option", {
          name: /sao paulo/i,
        });

        userEvent.click(saoPauloOption);

        const nextButton = screen.getByRole("button", { name: /Next/i });

        userEvent.click(nextButton);

        const secondNextButton = screen.getByRole("button", {
          name: /Next/i,
        });

        expect(secondNextButton).toBeDisabled();
      });
    });
  });
  describe("While the Payment Form inputs are valid", () => {
    it("Renders an enabled Next button", () => {
      const countrySelector = screen.getByRole("button", {
        name: /country/i,
      });

      userEvent.click(countrySelector);

      const argentinaOption = screen.getByRole("option", {
        name: /argentina/i,
      });

      userEvent.click(argentinaOption);

      const stateSelector = screen.getByRole("button", {
        name: /state/i,
      });
      userEvent.click(stateSelector);

      const buenosAiresCapitalOption = screen.getByRole("option", {
        name: /buenos aires capital/i,
      });

      userEvent.click(buenosAiresCapitalOption);
      const nextButton = screen.getByRole("button", { name: /Next/i });
      userEvent.click(nextButton);

      fillOutPaymentForm();
      expect(nextButton).toBeEnabled();
    });
    describe("When the Next Button is clicked a second time", () => {
      it("Renders the Review Order form", () => {
        const countrySelector = screen.getByRole("button", {
          name: /country/i,
        });
        userEvent.click(countrySelector);

        const brazilOption = screen.getByRole("option", {
          name: /brazil/i,
        });
        userEvent.click(brazilOption);

        const stateSelector = screen.getByRole("button", {
          name: /state/i,
        });

        userEvent.click(stateSelector);

        const saoPauloOption = screen.getByRole("option", {
          name: /sao paulo/i,
        });

        userEvent.click(saoPauloOption);

        const nextButton = screen.getByRole("button", { name: /Next/i });
        userEvent.click(nextButton);
        fillOutPaymentForm();
        const secondButton = screen.getByRole("button", {
          name: /Next/i,
        });

        userEvent.click(secondButton);
        const shippingAddress = screen.getByText(
          /123 main st, anytown, sao paulo 12345 brazil/i
        );
        expect(shippingAddress).toBeInTheDocument();
      });
    });
  });
});
