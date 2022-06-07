import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { AppContext } from "../context/AppContext";

import OrderItem from "../components/OrderItem";

import iconArrow from "../assets/icons/arrow.svg";

import styles from "styles/MyOrder.module.scss";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  // function that receives a number and converts this number in usd format
  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles["MyOrder__title-container"]}>
        <Image src={iconArrow} alt="arrow" />
        <p className={styles["MyOrder__title"]}>My order</p>
      </div>
      <div className={styles["my-order-content"]}>
        {state.cart.length > 0 ? (
          state.cart.map((product, index) => (
            <OrderItem key={`orderItem-${index}-${product.id}`} product={product} />
          ))
        ) : (
          <p className={styles["MyOrder__empty-cart"]}>Aún no tienes productos agregados</p>
        )}
        <div className={styles["MyOrder__order"]}>
          <p>
            <span>Total</span>
          </p>
          <p>{formatPrice(state.total)}</p>
        </div>
        <Link className={styles["primary-button"]} href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
