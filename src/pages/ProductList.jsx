import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "iPhone 15", price: 1200 },
  { id: 2, name: "MacBook Air", price: 1500 },
  { id: 3, name: "iPad Pro", price: 900 },
  { id: 4, name: "Apple Watch Series 8", price: 400 },
  { id: 5, name: "AirPods Pro 2", price: 250 },
];

function ProductList() {
  return (
    <div className="flex justify-center mt-5 flex-wrap space-x-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
