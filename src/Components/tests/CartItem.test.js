import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartItem } from "../CartItem";

describe("<CartItem />", () => {
  const props = {
    product: {
      id: 1,
      name: "AddedToCartTestName",
      price: 10.0,
    },
    onRemoveItemFromCart: () => {},
  };
  it("should render the cart item's name", () => {
    render(<CartItem {...props} />);

    expect(screen.getByText(/addedtocarttestname/i)).toBeInTheDocument();
  });
  it("should render the cart item's description", () => {
    render(<CartItem {...props} />);

    expect(screen.getByText(/10.00/i)).toBeInTheDocument();
  });
  it("should render the delete button", () => {
    render(<CartItem {...props} />);

    expect(
      screen.getByRole("button", {
        name: /remove from cart/i,
      })
    ).toBeInTheDocument();
  });

  describe("When delete item button is clicked", () => {
    it("Should dispatch remove item function", () => {
      const onRemoveItemFromCart = jest.fn();
      render(
        <CartItem {...props} onRemoveItemFromCart={onRemoveItemFromCart} />
      );
      expect(onRemoveItemFromCart).not.toHaveBeenCalled();

      userEvent.click(
        screen.getByRole("button", {
          name: /remove from cart/i,
        })
      );
      expect(onRemoveItemFromCart).toHaveBeenCalledTimes(1);
    });
    it("Should use {itemWithinCart} as a parameter", () => {
      const onRemoveItemFromCart = jest.fn();
      render(
        <CartItem {...props} onRemoveItemFromCart={onRemoveItemFromCart} />
      );

      userEvent.click(
        screen.getByRole("button", {
          name: /remove from cart/i,
        })
      );

      expect(onRemoveItemFromCart).toHaveBeenCalledWith(props.product);
    });
  });
});
