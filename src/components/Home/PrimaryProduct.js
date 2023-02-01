import React from "react";
import { useState, useEffect } from "react";
import classes from "./PrimaryProduct.module.css";
import Button from "../UI/Button";
import jpg from "../../images/MOBILE/image-speaker-zx9.png";
import jpgDesktop from "../../images/MOBILE/image-speaker-zx9.png";

export default function SpecificProduct(props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(width);
  return (
    <div className={classes.specificProduct}>
      {width < 1024 ? (
        <img src={jpg} alt="product"></img>
      ) : (
        <img src={jpgDesktop} alt="product" />
      )}

      <div className={classes.description}>
        <h3>{props.product}</h3>
        <p>{props.descrip}</p>
        <Button />
      </div>
    </div>
  );
}
