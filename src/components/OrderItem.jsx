import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "../styles/components/OrderItem.scss";
import iconClose from "@icons/icon_close.svg";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemoveProduct = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={iconClose}
        alt="close"
        onClick={() => handleRemoveProduct(product)}
        class="OrderItem__icon-delete"
      />
    </div>
  );
};

export default OrderItem;
