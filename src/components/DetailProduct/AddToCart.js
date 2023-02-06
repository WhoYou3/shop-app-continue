import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setQuantity } from "../../store/QuantityProductsSlice";

import { motion } from "framer-motion";
import classes from "./AddToCart.module.css";

export default function AddToCart(props) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [value, setValue] = useState(1);

  const productsCartList = useSelector((state) => state.productsList.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuantity(productsCartList));
  });

  const addProductToCart = () => {
    props.createProductHandler(value);
    dispatch(setQuantity(productsCartList));
  };
  const animation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  const addProductToCartWithAnimation = () => {
    addProductToCart();
    animation();
  };

  return (
    <div className={classes.addToCart}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={addProductToCartWithAnimation}
        disabled={isAnimating}
        className={classes.btn}
      >
        <div onClick={animation} className={classes.buttonContainer} />
        {isAnimating && (
          <motion.div
            className={classes.animationDiv}
            initial={{
              y: 0,
              x: 0,
            }}
            animate={{
              y: "-100vh",
              x: "50vw",
            }}
            transition={{ duration: 0.3 }}
          />
        )}
        ADD TO CART
      </button>
    </div>
  );
}
