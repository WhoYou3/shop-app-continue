import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <Link
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      to={props.navigate}
    >
      <button className={classes.btn}>SEE PRODUCT</button>
    </Link>
  );
}

export default Button;
