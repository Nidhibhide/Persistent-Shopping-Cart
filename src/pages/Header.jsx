// src/components/Header.jsx
import React, { useContext } from "react";
import { CartContext } from "./CartContent";

function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <header className="flex flex-col items-center justify-center p-4 bg-gray-100 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Shopping Cart App 🛒
      </h2>
      <p className="text-gray-600 font-bold text-xl">
        Cart Items: <span className="font-semibold text-xl">{cartCount}</span>
      </p>
    </header>
  );
}

export default Header;
