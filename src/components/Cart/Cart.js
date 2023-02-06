import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../store/CartToggleSlice";
import { motion } from "framer-motion";
import {
  incrementProducts,
  decrementProducts,
} from "../../store/CartProductListSlice";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const productsCartList = useSelector((state) => state.productsList.value);
  const quantityProducts = useSelector((state) => state.quantityProducts.value);
  console.log(quantityProducts);

  let totalPrize = 0;

  if (productsCartList) {
    for (let product of productsCartList) {
      totalPrize += product.cost;
    }
  }

  console.log(productsCartList);
  return (
    <div className={classes.background}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0.5, transition: { duration: 2 } }}
        className={classes.cartContainer}
      >
        {" "}
        <div className={classes.cartCount}>
          <h3>CART ({quantityProducts})</h3>
          <p>Remove all</p>
        </div>
        <ul className={classes.productsList}>
          {productsCartList.map((product) => (
            <li key={product.short}>
              <div className={classes.cart}>
                <img src={product.image} alt="product"></img>
                <div className={classes.description}>
                  <p>{product.short}</p>
                  <p>
                    <span>${product.cost}</span>
                  </p>
                </div>
                <div className={classes.inputContainer}>
                  <div
                    onClick={() => {
                      dispatch(decrementProducts(product));
                    }}
                  >
                    -
                  </div>
                  <input value={product.count} />
                  <div
                    onClick={() => {
                      dispatch(incrementProducts(product));
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={classes.cartSummary}>
          <p>Total</p>
          <p>
            <span>${totalPrize}</span>
          </p>
        </div>
        <div className={classes.btnContainer}>
          <button>CHECKOUT</button>
          <button
            style={{
              color: "black",
              border: "1px black solid",
              background: "white",
            }}
            onClick={() => dispatch(setCart())}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
