/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { AppContext } from "context/AppContext";

import Menu from "./Menu";
import MyOrder from "containers/MyOrder";

import logo from "@logos/logo_yard_sale.svg";
import iconMenu from "@icons/icon_menu.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";
import iconExpand from "@icons/expand.svg";

import styles from "styles/Header.module.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav}>
      <div className={styles.Menu}>
        <Image src={iconMenu} alt="Icono Menu" />
      </div>
      <div className={styles["navbar-left"]}>
        <Link href="/" passHref>
          <a>
            <Image
              src={logo}
              alt="Icono Logo"
              className={styles["logo-navbar"]}
              width={144}
              height={30}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>All</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Clothes</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Electronics</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Furniture</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Toys</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Others</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["navbar-right"]}>
        <ul>
          <li className={styles["navbar-email"]} onClick={handleToggle}>
            <p>example@email.com</p>
            <Image src={iconExpand} alt="icon shopping cart" />
          </li>
          <li
            className={styles["navbar-shopping-cart"]}
            onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={iconShoppingCart} alt="icon shopping cart" />
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
