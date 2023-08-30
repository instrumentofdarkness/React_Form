import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({
  productList,
  searchTerm,
  filteredProducts,
}) {
  if (!searchTerm) {
    return (
      <div>
        <h1>Product list</h1>
        {productList.map((item) => {
          return <ProductItem key={item.id} product={item} />;
        })}
      </div>
    );
  } else {
  }
  return (
    <div>
      <h1>Product list</h1>
      {filteredProducts.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}
