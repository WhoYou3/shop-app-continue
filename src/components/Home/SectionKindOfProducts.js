import React from "react";
import KindOfProduct from "./KindOfProduct";
import classes from "./SectionProducts.module.css";
import earphonesPNG from "../../images/image-category-thumbnail-earphones.png";
import headphonesPNG from "../../images/image-category-thumbnail-headphones.png";
import speakersPNG from "../../images/image-category-thumbnail-speakers.png";

const KINDOFPRODUCTS = {
  EARPHONES: "EARPHONES",
  HEADPHONES: "HEADPHONES",
  SPEAKERS: "SPEAKERS",
};

function SectionKidOfProducts(props) {
  return (
    <section className={classes.sectionProduct}>
      <KindOfProduct
        img={headphonesPNG}
        kindOfProduct={KINDOFPRODUCTS.HEADPHONES}
      />
      <KindOfProduct
        img={earphonesPNG}
        kindOfProduct={KINDOFPRODUCTS.EARPHONES}
      />
      <KindOfProduct
        img={speakersPNG}
        kindOfProduct={KINDOFPRODUCTS.SPEAKERS}
      />
    </section>
  );
}

export default SectionKidOfProducts;
