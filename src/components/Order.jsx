import React from "react";
import "../styles/Order.scss";

import iconArow from "@icons/arrow.svg";
import Image from "next/image";

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={iconArow} alt="arrow" />
    </div>
  );
};

export default Order;
