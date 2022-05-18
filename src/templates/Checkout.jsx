import React from "react";
import "../styles/pages/Checkout.scss";

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Checkout };
