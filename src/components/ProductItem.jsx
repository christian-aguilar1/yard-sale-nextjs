import React, { useState, useContext } from "react";
import Image from "next/image";

import { AppContext } from "../context/AppContext";

import iconCartAdd from "@icons/bt_add_to_cart.svg";
import iconCartAdded from "@icons/bt_added_to_cart.svg";

import styles from "../styles/components/ProductItem.module.scss";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (item) => {
    addToCart(item);
    setAddedToCart(true);
  };

  return (
    <div className={styles.ProductItem}>
      <div className={styles.ProductImage}>
        <Image src={product.image} alt={product.title} width={190} height={240} />
      </div>
      <div className={styles["product-info"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        {!addedToCart ? (
          <figure
            className={styles["ProductItem__button-add-to-cart"]}
            onClick={() => handleAdd(product)}
          >
            <Image src={iconCartAdd} alt="Add to cart" />
          </figure>
        ) : (
          <figure className={styles["ProductItem__button-added-to-cart"]}>
            <Image src={iconCartAdded} alt="Add to cart" />
          </figure>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
