import React from "react";
import { useSelector } from "react-redux";
import jpg from "../../images/image-xx99-mark-one-headphones.jpg";
import jpgDesktop from "../../images/DESKTOP/image-category-page-preview.jpg";
import Button from "../UI/Button";
import classes from "./Products.module.css";

function Product() {
  const widthChecker = useSelector((state) => state.width);
  console.log(widthChecker);
  return (
    <div className={classes.productContainer}>
      <img src={jpg} alt="product"></img>
      <div className={classes.description}>
        <p>
          <span>NEW PRODUCT</span>
        </p>
        <h2>XX99 Mark II Headphones</h2>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Product;
