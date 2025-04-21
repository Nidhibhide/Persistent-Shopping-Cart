import React, { useContext } from "react";
import { CartContext } from "./CartContent";

function Product({ product }) {
  const { buttonCart } = useContext(CartContext);
  return (
    <div className="border rounded-lg shadow-md p-4 m-4 w-72 text-center hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
      <p className="text-gray-600 text-xl font-semibold mb-4">
        {product.price}
      </p>
      <button
        // onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-lg"
        onClick={buttonCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
