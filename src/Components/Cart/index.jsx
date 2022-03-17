import { CartItem } from "../CartItem";

export function Cart({ items, onRemoveItemFromCart }) {
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
