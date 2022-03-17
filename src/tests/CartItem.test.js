import { render, screen } from "@testing-library/react";
import { CartItem } from "../Components/CartItem";

describe("<CartItem />", () => {
  const props = {
    addedProduct: {
      id: 1,
      name: "AddedToCartTestName",
      description: "AddedToCartDescription",
    },
    onRemoveItem: () => {},
  };
  it("should render the cart item's name", () => {
    render(<CartItem {...props} />);

    expect(screen.getByText(/addedtocarttestname/i)).toBeInTheDocument();
  });
  it("should render the cart item's description", () => {
    render(<CartItem {...props} />);

    expect(screen.getByText(/addedtocartdescription/i)).toBeInTheDocument();
  });
  it("should render the delete button", () => {
    render(<CartItem {...props} />);

    expect(
      screen.getByRole("button", {
        name: /remove from cart/i,
      })
    ).toBeInTheDocument();
  });
});
