import { Product } from "../Product";
export function ProductsList({ products, onAddToCart }) {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product product={product} onAddToCart={onAddToCart} />
          </li>
        );
      })}
    </ul>
  );
}
