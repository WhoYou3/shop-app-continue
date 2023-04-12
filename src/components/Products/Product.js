import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import classes from "./Products.module.css";

function Product(props) {
  const widthChecker = useSelector((state) => state.width);

  return (
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
        <Button navigate={props.path} />
      </div>
    </motion.div>
  );
}

export default Product;
