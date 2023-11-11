import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider(props) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart, name: "Emin" }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
