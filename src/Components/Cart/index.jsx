import { CartItem } from "../CartItem";

export function Cart({ items, handleRemoveItemFromCart }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            addedProduct={item}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        );
      })}
    </ul>
  );
}
