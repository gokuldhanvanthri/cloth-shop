import React from "react";
import { connect } from "react-redux";

import CustomButtom from "../button/button";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems = [] }) => {
  debugger;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
