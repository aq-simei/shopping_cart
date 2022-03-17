import { render, screen } from "@testing-library/react";
import { CartItem } from "../CartItem";

describe("<CartItem />", () => {
  const props = {
    productWithinCart: {
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

  describe("When delete item button is clicked", () => {
    it("Should dispatch remove item function", () => {
      const onHandleRemoveItem = jest.fn();
      render(<CartItem {...props} onHandleRemoveItem={onHandleRemoveItem} />);
      expect(onHandleRemoveItem).not.toHaveBeenCalled();

      userEvent.click(
        screen.getByRole("button", {
          name: /remove from cart/i,
        })
      );
      expect(onHandleRemoveItem).toHaveBeenCalledTimes(1);
    });
    it("Should use {itemWithinCart} as a parameter", () => {
      const onHandleRemoveItem = jest.fn();
      render(<CartItem {...props} onHandleRemoveItem={onHandleRemoveItem} />);

      userEvent.click(
        screen.getByRole("button", {
          name: /remove from cart/i,
        })
      );

      expect(onHandleRemoveItem).toHaveBeenCalledWith(props.productWithinCart);
    });
  });
});
