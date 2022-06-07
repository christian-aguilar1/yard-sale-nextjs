import Head from "next/head";
import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

import OrderItem from "components/OrderItem";

import styles from "styles/pages/Checkout.module.scss";

const Checkout = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles["Checkout-container"]}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles["Checkout-content"]}>
            <div className={styles.order}>
              <p>
                <span>04.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>

          {state.cart.length > 0 ? (
            state.cart.map((product, index) => (
              <OrderItem key={`orderItem-${index}-${product.id}`} product={product} />
            ))
          ) : (
            <p className={styles["empty-cart"]}>Aún no tienes productos agregados</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
