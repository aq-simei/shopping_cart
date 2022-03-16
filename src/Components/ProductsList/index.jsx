import { Product } from "../Product";
export function ProductsList({ products, onHandleAddToCart }) {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product product={product} onHandleAddToCart={onHandleAddToCart} />
          </li>
        );
      })}
    </ul>
  );
}
