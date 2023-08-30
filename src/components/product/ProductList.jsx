import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({
  productList,
  searchTerm,
  filteredProducts,
}) {
  if ({ searchTerm }) {
    return (
      <div>
        <h1>Product list</h1>
        {productList.map((product) => {
          <ProductItem key={product.id} product={product} />;
        })}
      </div>
    );
  } else {
  }
  return (
    <div>
      <h1>Product list</h1>
      {filteredProducts.map((product) => {
        <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
