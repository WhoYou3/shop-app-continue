import React from "react";
import classes from "./SpecificProduct.module.css";
import Button from "../UI/Button";
import jpg from "../../images/MOBILE/image-speaker-zx9.png";

export default function SpecificProduct() {
  return (
    <div className={classes.specificProduct}>
      <img src={jpg} alt="product"></img>
      <div className={classes.description}>
        <h3>ZX9 SPEAKER</h3>
        <p>
          Uprade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </p>
        <Button />
      </div>
    </div>
  );
}
