import { useEffect, useState } from "react";
import { ProductsList } from "../ProductsList";
import { Cart } from "../Cart";
import { Button } from "../Button";

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
  

  const addToCart = (params) => {
    console.log('Add to cart button is working')
    setCartItems([...cartItems, params])
  }
  return (
    <>
      <Button
        name="Products"
        onClick={() => setShowComponents("Products")}
      />
      <Button 
        name="Cart" 
        onClick={() => setShowComponents("Cart")} 
      />
      {showComponents === "Products" && <ProductsList products={products} addToCart={addToCart}/>}
      {showComponents === "Cart" && <Cart />}
    </>
  );
}
