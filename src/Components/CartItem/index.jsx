import { Button } from "../Button";

export const CartItem = ({ productWithinCart, onHandleRemoveItem }) => {
  return (
    <li>
      <span>{productWithinCart.name}</span>
      <span>{productWithinCart.description}</span>''
      <Button
        name="Remove from cart"
        onClick={() => {
          onHandleRemoveItem(productWithinCart);
        }}
      />
    </li>
  );
};
