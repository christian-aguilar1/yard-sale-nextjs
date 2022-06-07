import Link from "next/link";
import React from "react";

import styles from "styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/" passHref>
            <a className={styles.title}>My orders</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>My account</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>Sign out</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
