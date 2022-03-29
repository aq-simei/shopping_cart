import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddressForm from "../Checkout/AddressForm";

describe("Country Selector", () => {
  const addressFormProps = {
    formData: {
      address1: "Test address 1",
      address2: "Test address 2",
      city: "Test City",
      country: "Barbados",
      firstName: "testName",
      lastName: "testLastName",
      state: "Saint George",
      zip: "123",
    },
    onChange: () => {},
  };
  it("Renders 'country' selector as a button", () => {
    render(<AddressForm {...addressFormProps} />);
    const countrySelector = screen.getByRole("button", {
      name: /Country/i,
    });
    expect(countrySelector).toBeInTheDocument();
  });

  it("Renders 'state' as default text for State Selector", () => {
    render(<AddressForm {...addressFormProps} />);
    const stateSelector = screen.getByRole("button", { name: /state/i });
    expect(stateSelector).toBeInTheDocument();
  });

  describe("When the user tries to select it's country", () => {
    it("Should be able to see a list of countries after clicking the Country Selector", () => {
      render(<AddressForm formData={addressFormProps.formData} />);
      const countrySelector = screen.getByRole("button", { name: /Country/i });
      userEvent.click(countrySelector);

      const barbadosOption = screen.getByRole("option", {
        name: /barbados/i,
      });
      userEvent.click(barbadosOption);

      const stateSelector = screen.getByRole("button", {
        name: /state/i,
      });

      userEvent.click(stateSelector);

      const stateOption = screen.getByRole("option", {
        name: /Saint George/i,
      });

      expect(stateOption).toBeInTheDocument();

      expect(screen.queryByText("Sao Paulo")).not.toBeInTheDocument();
    });
  });
});
