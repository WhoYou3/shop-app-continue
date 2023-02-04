import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./AddToCart.module.css";

export default function AddToCart(props) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [value, setValue] = useState(1);

  // const animation = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setIsAnimating(false);
  //   }, 200);
  //   console.log(123);
  // };

  const addProductToCart = () => {
    props.createProductHandler(value);
  };
  return (
    <div className={classes.addToCart}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={addProductToCart}
        disabled={isAnimating}
        className={classes.btn}
      >
        {/* <div onClick={animation} className={classes.buttonContainer}></div>
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
        )} */}
        ADD TO CART
      </button>
    </div>
  );
}
