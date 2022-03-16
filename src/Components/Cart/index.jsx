import { CartItem } from "../CartItem/CartItem";

export function Cart({items}) {
  return (
    <ul>{
    items.map((item)=>{
      return(
      <CartItem addedProduct={item} key={item.id}/>
      )
    }
    )}
    </ul>
  );
}

