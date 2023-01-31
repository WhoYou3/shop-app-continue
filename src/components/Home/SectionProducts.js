import React from "react";
import Product from "./Product";
import classes from "./SectionProducts.module.css";
import earphonesPNG from "../../images/image-category-thumbnail-earphones.png";
import headphonesPNG from "../../images/image-category-thumbnail-headphones.png";
import speakersPNG from "../../images/image-category-thumbnail-speakers.png";

const KINDOFPRODUCTS = {
  EARPHONES: "EARPHONES",
  HEADPHONES: "HEADPHONES",
  SPEAKERS: "SPEAKERS",
};

function SectionProducts(props) {
  return (
    <section className={classes.sectionProduct}>
      <Product img={headphonesPNG} kindOfProduct={KINDOFPRODUCTS.HEADPHONES} />
      <Product img={earphonesPNG} kindOfProduct={KINDOFPRODUCTS.EARPHONES} />
      <Product img={speakersPNG} kindOfProduct={KINDOFPRODUCTS.SPEAKERS} />
    </section>
  );
}

export default SectionProducts;
