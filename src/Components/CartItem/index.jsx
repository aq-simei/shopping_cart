import { Button } from "../Button";

export const CartItem = ({ addedProduct, onHandleRemoveItem }) => {
  return (
    <li>
      <span>{addedProduct.name}</span>
      <span>{addedProduct.description}</span>
      <Button name="Remove from cart" onClick={() => {}} />
    </li>
  );
};
