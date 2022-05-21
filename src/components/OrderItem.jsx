import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import iconClose from "@icons/icon_close.svg";
import Image from "next/image";

import styles from "styles/components/OrderItem.module.scss";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  console.log("product", product)

  const handleRemoveProduct = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product.image} alt={product.title} width={70} height={70} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image
        src={iconClose}
        alt="close"
        onClick={() => handleRemoveProduct(product)}
        className={styles["OrderItem__icon-delete"]}
      />
    </div>
  );
};

export default OrderItem;
