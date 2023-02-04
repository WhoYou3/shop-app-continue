import React from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "../components/DetailProduct/ProductDescription";

import DUMMY_BACKEND from "../DUMMY_BACKEND/DUMMY_BACKEND";
import classes from "./DetailProduct.module.css";

export default function DetailProduct() {
  const param = useParams();
  console.log(param.product + " " + param.products);
  let detailProduct;

  if (param.products === "headphones") {
    detailProduct = DUMMY_BACKEND.HEADPHONES.map((headphone) => {
      if (headphone.path === param.product) {
        return (
          <ProductDescription
            key={headphone.id}
            product={headphone.product}
            description={headphone.description}
            imgDESKTOP={headphone.imgDESKTOP}
            imgMOBILE={headphone.imgMOBILE}
            cost={headphone.cost}
            short={headphone.shortName}
          />
        );
      }
    });
  }
  if (param.products === "earphones") {
    detailProduct = DUMMY_BACKEND.EARPHONES.map((earphone) => {
      if (earphone.path === param.product) {
        return (
          <ProductDescription
            key={earphone.id}
            product={earphone.product}
            description={earphone.description}
            imgDESKTOP={earphone.imgDESKTOP}
            imgMOBILE={earphone.imgMOBILE}
            cost={earphone.cost}
            short={earphone.shortName}
          />
        );
      }
    });
  }
  if (param.products === "speakers") {
    detailProduct = DUMMY_BACKEND.SPEAKERS.map((speakers) => {
      if (speakers.path === param.product) {
        return (
          <ProductDescription
            key={speakers.id}
            product={speakers.product}
            description={speakers.description}
            imgDESKTOP={speakers.imgDESKTOP}
            imgMOBILE={speakers.imgMOBILE}
            cost={speakers.cost}
            short={speakers.shortName}
          />
        );
      }
    });
  }

  return <div className={classes.detailProduct}>{detailProduct}</div>;
}
