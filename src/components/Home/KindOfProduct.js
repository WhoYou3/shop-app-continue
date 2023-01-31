import React from "react";
import { Link } from "react-router-dom";
import { GoArrowSmallRight } from "react-icons/go";
import classes from "./Product.module.css";

function Product(props) {
  return (
    <div className={classes.product}>
      <img src={props.img} alt="product"></img>
      <div className={classes.description}>
        <p>{props.kindOfProduct}</p>
        <Link>
          SHOP
          <span>
            <GoArrowSmallRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Product;
