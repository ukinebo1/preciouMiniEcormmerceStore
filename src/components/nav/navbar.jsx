import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react"
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/cart"><ShoppingCart size="32" /></Link>
      </div>
    </div>
  );
}

export default Navbar;
