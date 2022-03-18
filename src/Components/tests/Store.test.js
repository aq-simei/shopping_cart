import { render, screen } from "@testing-library/react";
import { Store } from "../Store";

describe("<Store />", () => {
  it("Should render two buttons and the products list first", () => {
    render(<Store />);

    screen.logTestingPlaygroundURL();
  });
});
