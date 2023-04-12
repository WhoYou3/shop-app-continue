import React from "react";
import { useSelector } from "react-redux";
import classes from "./Summary.module.css";

export default function Summary(props) {
  const summaryProducts = useSelector((state) => state.productsList.value);
  const buttonAvaliable = useSelector(
    (state) => state.submitFormAvaliable.value
  );
  let totalPrize = 0;

  if (summaryProducts) {
    for (let product of summaryProducts) {
      totalPrize += product.cost;
    }
  }

  return (
    <div className={classes.summaryProducts}>
      <h3>SUMMARY</h3>
      <ul className={classes.productsList}>
        {summaryProducts.map((product) => {
          return (
            <li className={classes.product} key={product.short}>
              <img src={product.image} alt="product"></img>
              <div>
                <p>{product.short}</p>
                <p>
                  <span>${product.cost}</span>
                </p>
              </div>
              <p>
                <span className={classes.productCount}>{product.count}x</span>
              </p>
            </li>
          );
        })}
      </ul>
      <div className={classes.moneySummary}>
        <div className={classes.money}>
          <p>TOTAL</p>
          <p>
            <span>{totalPrize}$</span>
          </p>
        </div>
        <div className={classes.money}>
          <p>SHIPPING</p>
          <p>
            <span>20$</span>
          </p>
        </div>

        <div className={classes.money}>
          <p className={classes.total}>GRAND TOTAL</p>
          <p className={classes.total}>
            <span className={classes.totalPrize}>{totalPrize + 20}$ </span>
          </p>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button
          style={{
            opacity:
              buttonAvaliable && summaryProducts.length > 0 ? "1" : "0.5",
            cursor:
              buttonAvaliable && summaryProducts.length > 0
                ? "pointer"
                : "default",
          }}
          disabled={
            buttonAvaliable && summaryProducts.length > 0 ? false : true
          }
          onClick={props.showSuccessfullContentHandler}
        >
          CONTINUE & PAY
        </button>
      </div>
    </div>
  );
}
