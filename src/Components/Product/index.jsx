import { Button } from "../Button";

export function Product({ product, onAddToCart }) {
  const { name, description, id } = product;
  return (
    <>
      <span>{name}</span>
      <span>{description}</span>
      <Button
        name={`Add to cart`}
        onClick={() => onAddToCart(product)}
        ariaLabel={`add ${product.name} to cart`}
      />
    </>
  );
}
