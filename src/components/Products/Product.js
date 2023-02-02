import React from "react";
import { useSelector } from "react-redux";

import Button from "../UI/Button";
import classes from "./Products.module.css";

function Product(props) {
  const widthChecker = useSelector((state) => state.width);
  console.log(props.reverse);

  return (
    <div
      className={classes.productContainer}
      style={{ flexDirection: props.reverse ? "row-reverse" : "" }}
    >
      {widthChecker < 1024 ? (
        <img src={props.imgMOBILE} alt="product"></img>
      ) : (
        <img src={props.imgDESKTOP} alt="product"></img>
      )}
      <div className={classes.description}>
        <p>
          <span>NEW PRODUCT</span>
        </p>
        <h2>{props.product}</h2>
        <p>{props.description}</p>
        <Button />
      </div>
    </div>
  );
}

export default Product;
