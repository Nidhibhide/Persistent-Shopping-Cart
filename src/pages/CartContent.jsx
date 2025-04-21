import React, { useEffect, useState } from "react";
import { createContext } from "react";

//1.create context
export const CartContext = createContext();

//2.create Provider
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const buttonCart = () => setCartCount(cartCount + 1);

  //update local storage whenever cartCount changes
  useEffect(() => {
    if (cartCount != 0) localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  //load cart count from Local storage when app starts
  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) {
      setCartCount(Number(storedCount));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, buttonCart }}>
      {children}
    </CartContext.Provider>
  );
};
