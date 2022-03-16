import { Button } from "../Button";

export const CartItem = ({ addedProduct, onHandleRemoveItem }) => {
  return (
    <li key={addedProduct.id}>
      <span>{addedProduct.name}</span>
      <span>{addedProduct.description}</span>
      <Button name="Remove from cart" onClick={() => {}} />
    </li>
  );
};
