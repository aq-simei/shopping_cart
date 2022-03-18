import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cart } from "../Cart";
import { ProductsList } from "../ProductsList";
import { Store } from "../Store";

describe("<Store />", () => {
  it("Should render two main buttons", () => {
    render(<Store />);

    expect(
      screen.getByRole("button", {
        name: /products/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Cart/ })).toBeInTheDocument();
  });

  it("Should render a default product list", () => {
    render(<Store />);

    //pen
    expect(
      screen.getByRole("button", {
        name: "add Caneta to cart",
      })
    ).toBeInTheDocument();

    //paper

    expect(
      screen.getByRole("button", {
        name: "add Pacote folha sulfite to cart",
      })
    );
    //pencil
    expect(
      screen.getByRole("button", {
        name: "add Lápis to cart",
      })
    );
  });
  it("Should add a product to Cart when addToCart is clicked", () => {
    render(<Store />);
    userEvent.click(
      screen.getByRole("button", {
        name: "add Caneta to cart",
      })
    );
    userEvent.click(
      screen.getByRole("button", {
        name: "Cart",
      })
    );
    expect(
      screen.getByRole("button", {
        name: /remove from cart/i,
      })
    ).toBeInTheDocument();
  });
  it("Should remove an item from the Cart when removeFromCart is clicked", () => {
    render(<Store />);
    //clicks the button to add an item to the Cart
    userEvent.click(
      screen.getByRole("button", {
        name: "add Caneta to cart",
      })
    );
    //clicks the button to move to the Cart section
    userEvent.click(
      screen.getByRole("button", {
        name: "Cart",
      })
    );
    //clicks the button to remove the item from cart
    userEvent.click(
      screen.getByRole("button", {
        name: /remove from cart/i,
      })
    );
    expect(screen.getByText("There are no items in Cart")).toBeInTheDocument();
  });
});
