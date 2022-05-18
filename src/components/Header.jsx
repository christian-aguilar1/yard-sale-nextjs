import React, { useState, useContext } from "react";

import { AppContext } from "../context/AppContext";
import Menu from "./Menu";
import MyOrder from "../containers/MyOrder";

import "../styles/Header.scss";
import logo from "@logos/logo_yard_sale.svg";
import iconMenu from "@icons/icon_menu.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";
import iconExpand from "@icons/expand.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-navbar" />
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Clothes</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Furniture</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            example@email.com
            <img src={iconExpand} alt="icon shopping cart" />
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={iconShoppingCart} alt="icon shopping cart" />
            {state.cart.length > 9 ? (
              <div>+9</div>
            ) : (
              state.cart.length > 0 && <div>{state.cart.length}</div>
            )}
          </li>
        </ul>
      </div>

      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export { Header };
