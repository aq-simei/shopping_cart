import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Product } from "../Product";

describe("<Product />", () => {
  const props = {
    product: {
      id: 1,
      name: "TestName",
      price: 10.0,
    },
    onAddToCart: () => {},
  };

  it("should render the product's name", () => {
    render(<Product {...props} />);

    expect(screen.getByText(/testname/i)).toBeInTheDocument();
  });
  it("should render the product's description", () => {
    render(<Product {...props} />);
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });

  it("should render a addToCart button", () => {
    render(<Product {...props} />);

    expect(
      screen.getByRole("button", {
        name: /add testname to cart/i,
      })
    ).toBeInTheDocument();
  });

  describe("When the addToCart button is clicked", () => {
    it("should dispatch addToCart function", () => {
      const onAddToCart = jest.fn();
      render(<Product {...props} onAddToCart={onAddToCart} />);

      expect(onAddToCart).not.toHaveBeenCalled();

      userEvent.click(
        screen.getByRole("button", {
          name: /add TestName to cart/i,
        })
      );
      expect(onAddToCart).toHaveBeenCalledTimes(1);
    });
    it("handleAddToCart should use the {product} object as parameter", () => {
      const onAddToCart = jest.fn();
      render(<Product product={props.product} onAddToCart={onAddToCart} />);

      userEvent.click(
        screen.getByRole("button", {
          name: /add TestName to cart/i,
        })
      );

      expect(onAddToCart).toHaveBeenCalledWith(props.product);
    });
  });
});
