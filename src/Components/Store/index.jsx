import { useEffect, useState } from "react";
import { ProductsList } from "../ProductsList";
import { Cart } from "../Cart";
import { Button } from "../Button";

const RENDER_PRODUCTS_STATE_KEY = 'Products';
const RENDER_CART_STATE_KEY = 'Cart'

const initialProducts = [
  {
    id: 1,
    name: 'Caneta',
    description: 'R$2,00'
  },
  {
    id: 2,
    name: 'Pacote folha sulfite',
    description: 'R$10,00'
  },
  {
    id: 3,
    name:'Lápis',
    description: 'R$0,50'
  }
]
export function Store() {

  const [showComponents, setShowComponents] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <>
      <Button
        name="Products"
        onClick={() => setShowComponents(RENDER_PRODUCTS_STATE_KEY)}
      />
      <Button 
        name="Cart" 
        onClick={() => setShowComponents(RENDER_CART_STATE_KEY)} 
      />
      {showComponents === RENDER_PRODUCTS_STATE_KEY && <ProductsList products={products} />}
      {showComponents === RENDER_CART_STATE_KEY && <Cart items={cartItems}/>}
    </>
  );
}
