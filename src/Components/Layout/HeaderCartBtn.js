import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartBtn = (props) => {
  const [cartAnimation, setCartAnimation] = useState(false);

  const cartCtx = useContext(CartContext);

  const cartItemCount = cartCtx.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const clsBtn = `${classes.button} ${cartAnimation ? classes.bump : ""}`;

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartAnimation(true);

    const timer = setTimeout(() => {
      setCartAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={clsBtn} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default HeaderCartBtn;
