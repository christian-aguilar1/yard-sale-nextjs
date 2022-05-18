import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import OrderItem from "../components/OrderItem";

import "../styles/MyOrder.scss";
import iconArrow from "../assets/icons/arrow.svg";

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
    <aside className="MyOrder">
      <div className="MyOrder__title-container">
        <img src={iconArrow} alt="arrow" />
        <p className="MyOrder__title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.length > 0 ? (
          state.cart.map((product, index) => (
            <OrderItem
              key={`orderItem-${index}-${product.id}`}
              product={product}
            />
          ))
        ) : (
          <p className="MyOrder__empty-cart">
            Aún no tienes productos agregados
          </p>
        )}
        <div className="MyOrder__order">
          <p>
            <span>Total</span>
          </p>
          <p>{formatPrice(state.total)}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
