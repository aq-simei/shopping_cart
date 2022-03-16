import { CartItem } from "../CartItem";

export function Cart({ items, onHandleRemoveItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            productWithinCart={item}
            onHandleRemoveItem={onHandleRemoveItem}
          />
        );
      })}
    </ul>
  );
}
