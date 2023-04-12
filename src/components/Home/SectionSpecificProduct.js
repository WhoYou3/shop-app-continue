import PrimaryProduct from "./PrimaryProduct";
import SecondaryProduct from "./SecondaryProduct";
import ThirdProduct from "./ThirdProduct";

import classes from "./SectionSpecificProduct.module.css";

const descripPrimaryProduct =
  "Uprade to premium speakers that are phenomenally built to delivertruly remarkable sound";

function SectionSpecificProduct(props) {
  return (
    <section className={classes.sectionSpecificProduct}>
      <PrimaryProduct product="ZX9 SPEAKER" descrip={descripPrimaryProduct} />
      <SecondaryProduct product="ZH7 SPEAKER" />
      <ThirdProduct product="YX1 EARPHONES " />
    </section>
  );
}

export default SectionSpecificProduct;
