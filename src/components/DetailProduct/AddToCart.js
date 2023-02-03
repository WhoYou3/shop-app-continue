import React from "react";
import classes from "./AddToCart.module.css";
import { useState } from "react";

export default function AddToCart() {
  return (
    <div className={classes.addToCart}>
      <input type={"number"} />
      <button className={classes.btn}>ADD TO CART</button>
    </div>
  );
}
