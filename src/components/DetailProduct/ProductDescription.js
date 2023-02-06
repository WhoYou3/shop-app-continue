import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import AddToCart from "./AddToCart";
import { setProductToList } from "../../store/CartProductListSlice";
import classes from "./ProductDescription.module.css";

export default function ProductDescription(props) {
  const widthChecker = useSelector((state) => state.width);
  const dispatch = useDispatch();
  const param = useParams();

  const createProductObject = (count) => {
    console.log("tutaj");
    const product = {
      product: props.product,
      cost: props.cost * count,
      singleCost: props.cost,
      short: props.short,
      image: props.imgMOBILE,
      count: +count,
    };
    console.log(product.cost);
    dispatch(setProductToList(product));
  };

  return (
    <>
      <motion.div
        className={classes.productContainer}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, transition: { dutarion: 5 } }}
        style={{
          flexDirection:
            props.reverse && widthChecker.value > 1024 ? "row-reverse" : "",
        }}
      >
        <Link to={`/${param.products}`}>Go Back</Link>
        {widthChecker.value < 1024 ? (
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
          <p className={classes.cost}>${props.cost}</p>
          <AddToCart createProductHandler={createProductObject} />
        </div>
      </motion.div>
    </>
  );
}
