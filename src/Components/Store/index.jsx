import { useState } from "react";
import { ProductsList } from "../ProductsList";
import { Cart } from "../Cart";
import { Button } from "../Button";
import Checkout from "../Checkout";

const RENDER_PRODUCTS_STATE_KEY = "Products";
const RENDER_CART_STATE_KEY = "Cart";
const RENDER_CHECKOUT_STATE_KEY = "Checkout";

const initialProducts = [
  {
    id: 1,
    name: "Caneta",
    description: "R$2,00",
  },
  {
    id: 2,
    name: "Pacote folha sulfite",
    description: "R$10,00",
  },
  {
    id: 3,
    name: "Lápis",
    description: "R$0,50",
  },
];

export function Store() {
  const [showComponents, setShowComponents] = useState(
    RENDER_PRODUCTS_STATE_KEY
  );
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItemFromCart = (product) => {
    const updateCartItems = cartItems.filter((item) => product.id !== item.id);
    setCartItems(updateCartItems);
  };

  const handleAddItemToCart = (product) => {
    const selectedProduct = cartItems.find(
      (currentProduct) => currentProduct.id === product.id
    );
    const isAlreadyOnTheList = Boolean(selectedProduct);

    if (!isAlreadyOnTheList) {
      setCartItems([...cartItems, product]);
    }
  };

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
      <Button
        name="Checkout"
        onClick={() => setShowComponents(RENDER_CHECKOUT_STATE_KEY)}
      />

      {showComponents === RENDER_CHECKOUT_STATE_KEY && <Checkout />}

      {showComponents === RENDER_PRODUCTS_STATE_KEY && (
        <ProductsList products={products} onAddToCart={handleAddItemToCart} />
      )}
      {showComponents === RENDER_CART_STATE_KEY && (
        <Cart
          items={cartItems}
          onRemoveItemFromCart={handleRemoveItemFromCart}
        />
      )}
    </>
  );
}
