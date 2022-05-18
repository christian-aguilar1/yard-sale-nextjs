import React from "react";
import "../styles/ProductList.scss";

import ProductItem from "../components/ProductItem";

import { useGetProducts } from "../hooks/useGetProducts";

const API = "https://fakestoreapi.com/products";

const ProductList = () => {
  const { products, dataStatus } = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };
