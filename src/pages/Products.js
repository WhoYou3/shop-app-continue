import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Products.module.css";
import Product from "../components/Products/Product";
import SectionKidOfProducts from "../components/Home/SectionKindOfProducts";
import headphonesIIJPG from "../../src/images/MOBILE/image-headphones-two.jpg";
import headphonesIIJPGDESKTOP from "../../src/images/DESKTOP/image-headphones-two-desktop.jpg";
import headphonesIJPG from "../images/MOBILE/image-headphones-one.jpg";
import headphonesIJPGDESKTOP from "../images/DESKTOP/image-headphones-one-desktop.jpg";
import headphonesXX59JPG from "../images/MOBILE/image-headphones-XX59.jpg";
import headphonesXX59JPGDESKTOP from "../images/DESKTOP/image-headphones-XX59-desktop.jpg";
import earphonesYX1JPG from "../images/MOBILE/image-earphones-yx11.jpg";
import earphonesYX1JPGDESKTOPM from "../images/DESKTOP/image-earphones-yx11-desktop.jpg";
import spekearZX7JPG from "../images/MOBILE/image-speaker-ZX77.jpg";
import spekaerZX7JPGDESKTOP from "../images/DESKTOP/image-speaker-zx7Desktop.jpg";
import speakerZX9JPG from "../images/MOBILE/image-speaker-zx9.jpg";
import speakerZX9JPGDESKTOP from "../images/DESKTOP/image-speaker-zx9-desktop.jpg";
import AnimatedPage from "./AnimatedPage";
import DUMMY_BACKEND from "../DUMMY_BACKEND/DUMMY_BACKEND";

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
