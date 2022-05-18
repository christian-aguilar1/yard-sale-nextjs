import React, { useState, useContext } from "react";
import "../styles/components/ProductItem.scss";

import iconCartAdd from "@icons/bt_add_to_cart.svg";
import iconCartAdded from "@icons/bt_added_to_cart.svg";

import { AppContext } from "../context/AppContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (item) => {
    addToCart(item);
    setAddedToCart(true);
  };

  return (
    <div className="ProductItem">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        {!addedToCart ? (
          <figure
            className="ProductItem__button-add-to-cart"
            onClick={() => handleAdd(product)}
          >
            <img src={iconCartAdd} alt="Add to cart" />
          </figure>
        ) : (
          <figure className="ProductItem__button-added-to-cart">
            <img src={iconCartAdded} alt="Add to cart" />
          </figure>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
