import React from "react";
import { GrStatusGood } from "react-icons/gr";
import classes from "./SuccessfullOrder.module.css";
export default function SuccessfullOrder(props) {
  return (
    <div className={classes.succcessfullOrder}>
      <div className={classes.successfullOrderCart}>
        <GrStatusGood
          size={"5rem"}
          style={{
            borderRadius: "50%",
            backgroundColor: "orange",
          }}
        />
        <h3>THANK YOU FOR YOUR ORDER</h3>
        <p>You will receive an email confirmation shortly</p>
      </div>
    </div>
  );
}
