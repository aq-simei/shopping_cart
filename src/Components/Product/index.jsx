import { Button } from "../Button";
import { formatCurrency } from "../../utils/formatCurrency";

export function Product({ product, onAddToCart }) {
  const { name, description, price } = product;
  return (
    <>
      <span>{name}</span>
      <span>{formatCurrency(price, "BRL")}</span>
      <Button
        name="Add to cart"
        onClick={() => onAddToCart(product)}
        ariaLabel={`add ${product.name} to cart`}
      />
    </>
  );
}
