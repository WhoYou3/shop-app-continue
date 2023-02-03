import React from "react";
import Button from "../UI/Button";
import classes from "./SecondaryProduct.module.css";

export default function SecondaryProduct(props) {
  return (
    <div className={classes.secondaryProduct}>
      <div className={classes.description}>
        <h3>{props.product}</h3>
        <Button navigate="/speakers/ZX7" />
      </div>
    </div>
  );
}
