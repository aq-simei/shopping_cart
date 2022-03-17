import { Button } from "../Button";

export const CartItem = ({ addedProduct, onRemoveItemFromCart }) => {
  return (
    <li>
      <span>{addedProduct.name}</span>
      <span>{addedProduct.description}</span>
      <Button name="Remove from cart" onClick={() => {}} />
    </li>
  );
};
