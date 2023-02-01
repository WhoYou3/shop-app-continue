import React from "react";
import classes from "./ThirdProduct.module.css";
import earphoneJPG from "../../images/MOBILE/image-earphones-yx1.jpg";
import Button from "../UI/Button";

export default function ThirdProduct(props) {
  return (
    <div className={classes.thirdProduct}>
      <img src={earphoneJPG} alt="product earphones"></img>
      <div className={classes.description}>
        <h3>YX1 EARPHONES</h3>
        <Button />
      </div>
    </div>
  );
}
