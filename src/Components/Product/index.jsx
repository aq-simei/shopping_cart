import { Button } from "../Button";

export function Product({ product, onAddToCart }) {
  const { name, description, price } = product;
  return (
    <>
      <span>{name}</span>
      <span>{description}</span>
      <span>{price.toFixed(2)}</span>
      <Button
        name="Add to cart"
        onClick={() => onAddToCart(product)}
        ariaLabel={`add ${product.name} to cart`}
      />
    </>
  );
}
