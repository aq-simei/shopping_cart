import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Product } from "../Components/Product";

describe("<Product />", () => {
  const props = {
    product: {
      id: 1,
      name: "TestName",
      description: "TestDescription",
    },
    onHandleAddToCart: () => {},
  };

  it("should render the product's name", () => {
    render(<Product {...props} />);

    expect(screen.getByText(/testname/i)).toBeInTheDocument();
  });
  it("should render the product's description", () => {
    render(<Product {...props} />);
    expect(screen.getByText(/testdescription/i)).toBeInTheDocument();
  });

  it("should render a addToCart button", () => {
    render(<Product {...props} />);

    expect(
      screen.getByRole("button", {
        name: /add to cart/i,
      })
    ).toBeInTheDocument();
  });

  describe("When the addToCart button is clicked", () => {
    it("should dispatch addToCart function", () => {
      const onHandleAddToCart = jest.fn();
      render(<Product {...props} onHandleAddToCart={onHandleAddToCart} />);

      expect(onHandleAddToCart).not.toHaveBeenCalled();

      userEvent.click(
        screen.getByRole("button", {
          name: /add to cart/i,
        })
      );
      expect(onHandleAddToCart).toHaveBeenCalledTimes(1);
    });
    it("handleAddToCart should use the {product} object as parameter", () => {
      const onHandleAddToCart = jest.fn();
      render(
        <Product
          product={props.product}
          onHandleAddToCart={onHandleAddToCart}
        />
      );

      userEvent.click(
        screen.getByRole("button", {
          name: /add to cart/i,
        })
      );

      expect(onHandleAddToCart).toHaveBeenCalledWith(props.product);
    });
  });
});
