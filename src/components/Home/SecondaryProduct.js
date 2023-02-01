import React from "react";
import Button from "../UI/Button";
import classes from "./SecondaryProduct.module.css";

export default function SecondaryProduct(props) {
  return (
    <div className={classes.secondaryProduct}>
      <div className={classes.description}>
        <h3>ZX7 SPEAKER</h3>
        <Button />
      </div>
    </div>
  );
}
