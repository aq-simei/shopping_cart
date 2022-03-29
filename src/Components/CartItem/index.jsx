import { Button } from "../Button";
import { formatCurrency } from "../../utils/formatCurrency";

export const CartItem = ({ product, onRemoveItemFromCart }) => {
  return (
    <li>
      <span>{product.name}</span>
      <span>{formatCurrency(product.price, "BRL")}</span>
      <Button
        name="Remove from cart"
        onClick={() => onRemoveItemFromCart(product)}
      />
    </li>
  );
};
