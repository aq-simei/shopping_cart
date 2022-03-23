import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddressForm from "../Checkout/AddressForm";

describe("Country Selector", () => {
  it("Renders 'country' selector as a button", () => {
    render(<AddressForm />);
    const countrySelector = screen.getByRole("button", {
      name: /Country/i,
    });
    expect(countrySelector).toBeInTheDocument();
  });

  it("Renders 'state' as default text for State Selector", () => {
    render(<AddressForm />);
    const stateSelector = screen.getByRole("button", { name: /state/i });
    expect(stateSelector).toBeInTheDocument();
  });

  describe("When the user tries to select it's country", () => {
    it("Should be able to see a list of countries after clicking the Country Selector", () => {
      render(<AddressForm />);
      const countrySelector = screen.getByRole("button", { name: /Country/i });
      userEvent.click(countrySelector);

      const bulgariaOption = screen.getByRole("option", {
        name: /bulgaria/i,
      });
      userEvent.click(bulgariaOption);

      const stateSelector = screen.getByRole("button", {
        name: /state/i,
      });
      userEvent.click(stateSelector);

      const stateOption = screen.getByRole("option", {
        name: /dobrich/i,
      });

      expect(stateOption).toBeInTheDocument();

      expect(screen.queryByText("Sao Paulo")).not.toBeInTheDocument();
    });
  });
});
