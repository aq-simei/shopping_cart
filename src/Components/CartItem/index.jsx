import { Button } from "../Button";

export const CartItem = ({ product, onRemoveItemFromCart }) => {
  return (
    <li>
      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.price.toFixed(2)}</span>
      <Button
        name="Remove from cart"
        onClick={() => onRemoveItemFromCart(product)}
      />
    </li>
  );
};
