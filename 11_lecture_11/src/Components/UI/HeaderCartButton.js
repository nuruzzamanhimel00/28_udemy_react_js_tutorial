import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClickBtn}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
