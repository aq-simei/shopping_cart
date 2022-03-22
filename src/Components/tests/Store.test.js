import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Store } from "../Store";

describe("<Store />", () => {
  it("Should render three main buttons", () => {
    render(<Store />);
    const productsButton = screen.getByRole("button", {
      name: /products/i,
    });
    const cartButton = screen.getByRole("button", { name: /Cart/ });
    const checkoutButton = screen.getByRole("button", { name: /Checkout/ });

    expect(checkoutButton).toBeInTheDocument();
    expect(productsButton).toBeInTheDocument();

    expect(cartButton).toBeInTheDocument();
  });

  it("Should render the product list by default", () => {
    render(<Store />);
    const addPenToCartButton = screen.getByRole("button", {
      name: "add Caneta to cart",
    });
    const addPaperToCartButton = screen.getByRole("button", {
      name: "add Pacote folha sulfite to cart",
    });
    const addPencilToCartButton = screen.getByRole("button", {
      name: "add Lápis to cart",
    });

    expect(addPenToCartButton).toBeInTheDocument();

    expect(addPaperToCartButton).toBeInTheDocument();

    expect(addPencilToCartButton).toBeInTheDocument();
  });
  it("Should add a product to Cart when 'Add To Cart' button is clicked", () => {
    render(<Store />);
    const addPencilToCartButton = screen.getByRole("button", {
      name: "add Lápis to cart",
    });
    const cartButton = screen.getByRole("button", { name: /Cart/ });

    userEvent.click(addPencilToCartButton);
    userEvent.click(cartButton);
    const removeFromCartButton = screen.getByRole("button", {
      name: /Remove from cart/,
    });
    expect(removeFromCartButton).toBeInTheDocument();
  });
  it("Should remove an item from the Cart when 'Remove From Cart' is clicked", () => {
    render(<Store />);
    const addPenToCartButton = screen.getByRole("button", {
      name: "add Lápis to cart",
    });
    const cartButton = screen.getByRole("button", { name: /Cart/ });

    expect(
      screen.queryByRole("button", {
        name: /remove from cart/i,
      })
    ).not.toBeInTheDocument();

    //clicks the button to add an item to the Cart
    userEvent.click(addPenToCartButton);

    //clicks the button to move to the Cart section
    userEvent.click(cartButton);

    const removeFromCartButton = screen.getByRole("button", {
      name: /Remove from cart/,
    });

    //clicks the button to remove the item from cart
    userEvent.click(removeFromCartButton);
    expect(screen.getByText("There are no items in Cart")).toBeInTheDocument();
  });
  it("should render the checkout component when the checkout button is clicked", () => {
    render(<Store />);
    const checkoutButton = screen.getByRole("button", {
      name: /checkout/i,
    });
    userEvent.click(checkoutButton);

    expect(
      screen.getByRole("heading", { name: "Checkout" })
    ).toBeInTheDocument();
  });
});
