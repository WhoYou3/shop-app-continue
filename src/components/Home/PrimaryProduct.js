import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import classes from "./PrimaryProduct.module.css";
import Button from "../UI/Button";
import jpg from "../../images/MOBILE/image-speaker-zx9.png";
import jpgDesktop from "../../images/MOBILE/image-speaker-zx9.png";

export default function SpecificProduct(props) {
  const widthChecker = useSelector((state) => state.width);

  return (
    <div className={classes.specificProduct}>
      {widthChecker < 1024 ? (
        <img src={jpg} alt="product"></img>
      ) : (
        <img src={jpgDesktop} alt="product" />
      )}

      <div className={classes.description}>
        <h3>{props.product}</h3>
        <p>{props.descrip}</p>
        <Button navigate="/speakers/ZX9" />
      </div>
    </div>
  );
}
