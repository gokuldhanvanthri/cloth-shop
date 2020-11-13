import React from "react";

import CustomButtom from "../button/button";
import "./cart-dropdown.styles.scss";

const Cart = () => (
  <div
    className="cart-dropdown"
    onClick={() => {
      alert("clicked");
    }}
  >
    <div className="cart-items"></div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

export default Cart;
