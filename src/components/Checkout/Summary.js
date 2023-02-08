import React from "react";
import { useSelector } from "react-redux";

import classes from "./Summary.module.css";

export default function Summary() {
  const summaryProducts = useSelector((state) => state.productsList.value);
  console.log(summaryProducts);
  return (
    <div>
      <h3>SUMMARY</h3>
      <ul>
        {summaryProducts.map((product) => {
          return (
            <li key={product.short}>
              <div>
                <img src={product.image} alt="product"></img>
                <div>
                  <p>{product.short}</p>
                  <p>{product.cost}</p>
                </div>
                <p>{product.count}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
