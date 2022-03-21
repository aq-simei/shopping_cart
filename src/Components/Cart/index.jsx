import { CartItem } from "../CartItem";

export function Cart({ items, onRemoveItemFromCart }) {
  if (items.length === 0) {
    return <p>There are no items in Cart</p>;
  }
  return (
    <ul>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            product={item}
            onRemoveItemFromCart={onRemoveItemFromCart}
          />
        );
      })}
    </ul>
  );
}
