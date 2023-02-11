import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../store/CartToggleSlice";
import { motion } from "framer-motion";
import {
  incrementProducts,
  decrementProducts,
  removeAll,
} from "../../store/CartProductListSlice";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const dispatch = useDispatch();

  const productsCartList = useSelector((state) => state.productsList.value);
  const quantityProducts = useSelector((state) => state.quantityProducts.value);

  let totalPrize = 0;

  if (productsCartList) {
    for (let product of productsCartList) {
      totalPrize += product.cost;
    }
  }

  const removeAllProducts = () => {
    dispatch(removeAll());
    localStorage.clear();
  };

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
          <button className={classes.btnRemove} onClick={removeAllProducts}>
            Remove all
          </button>
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
          <Link to="/Checkout">
            <button onClick={() => dispatch(setCart())}>CHECKOUT</button>
          </Link>
          <button
            style={{
              color: "black",
              border: "1px black solid",
              background: "white",
            }}
            onClick={() => {
              dispatch(setCart());
              document.body.style.overflow = "auto";
            }}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
