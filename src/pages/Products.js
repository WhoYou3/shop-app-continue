import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Products/Product";
import SectionKidOfProducts from "../components/Home/SectionKindOfProducts";
import DUMMY_BACKEND from "../DUMMY_BACKEND/DUMMY_BACKEND";
import classes from "./Products.module.css";

function Products() {
  const param = useParams();
  let listProducts;
  let reverse;

  if (param.products === "headphones") {
    listProducts = DUMMY_BACKEND.HEADPHONES.map((headphones) => {
      if (headphones.id % 2 === 0) {
        reverse = true;
      } else reverse = false;
      return (
        <Product
          key={headphones.id}
          path={headphones.path}
          product={headphones.product}
          description={headphones.description}
          imgDESKTOP={headphones.imgDESKTOP}
          imgMOBILE={headphones.imgMOBILE}
          reverse={reverse}
        />
      );
    });
  }

  if (param.products === "earphones") {
    listProducts = DUMMY_BACKEND.EARPHONES.map((earphones) => {
      if (earphones.id % 2 === 0) {
        reverse = true;
      } else reverse = false;
      return (
        <Product
          key={earphones.id}
          path={earphones.path}
          product={earphones.product}
          description={earphones.description}
          imgDESKTOP={earphones.imgDESKTOP}
          imgMOBILE={earphones.imgMOBILE}
          reverse={reverse}
        />
      );
    });
  }
  if (param.products === "speakers") {
    listProducts = DUMMY_BACKEND.SPEAKERS.map((speakers) => {
      if (speakers.id % 2 === 0) {
        reverse = true;
      } else reverse = false;
      return (
        <Product
          key={speakers.id}
          path={speakers.path}
          product={speakers.product}
          description={speakers.description}
          imgDESKTOP={speakers.imgDESKTOP}
          imgMOBILE={speakers.imgMOBILE}
          reverse={reverse}
        />
      );
    });
  }

  return (
    <div>
      <div className={classes.products}>{param.products.toUpperCase()}</div>
      {listProducts}
      <SectionKidOfProducts />
    </div>
  );
}

export default Products;
