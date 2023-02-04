import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../store/CartToggleSlice";
import { motion } from "framer-motion";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartShower = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const productsCartList = useSelector((state) => state.productsList.value);
  console.log(productsCartList);

  return (
    <div className={classes.background}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0.5, transition: { duration: 2 } }}
        className={classes.cartContainer}
      >
        <div className={classes.cart}>
          <h3>CART (3)</h3>
          <p>Remove all</p>
        </div>
        <div>
          <img></img>
          <div>
            <p>XX99 MK 11</p>
            <p>$2999</p>
          </div>
          <input></input>
        </div>
        <div>
          <p>Total</p>
          <p>$5000</p>
        </div>
        <button>CHECKOUT</button>
        <button onClick={() => dispatch(setCart())}>Close</button>
      </motion.div>
    </div>
  );
}
