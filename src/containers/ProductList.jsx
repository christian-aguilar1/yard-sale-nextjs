import React from "react";

import { useGetProducts } from "../hooks/useGetProducts";

import ProductItem from "../components/ProductItem";

const API = "https://fakestoreapi.com/products";

import styles from "styles/containers/ProductList.module.scss";

const ProductList = () => {
  const { products, dataStatus } = useGetProducts(API);

  return (
    <section className={styles["main-container"]}>
      {dataStatus.loading ? (
        <p>Cargando...</p>
      ) : (
        <div className={styles.ProductList}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export { ProductList };
