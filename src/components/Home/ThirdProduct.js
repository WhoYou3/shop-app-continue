import React from "react";
import earphoneJPG from "../../images/MOBILE/image-earphones-yx1.jpg";
import Button from "../UI/Button";
import classes from "./ThirdProduct.module.css";

export default function ThirdProduct(props) {
  return (
    <div className={classes.thirdProduct}>
      <img src={earphoneJPG} alt="product earphones"></img>
      <div className={classes.description}>
        <h3>{props.product}</h3>
        <Button navigate="/earphones/YX1" />
      </div>
    </div>
  );
}
