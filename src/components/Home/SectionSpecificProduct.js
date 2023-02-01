import PrimaryProduct from "./PrimaryProduct";
import SecondaryProduct from "./SecondaryProduct";

import classes from "./SectionSpecificProduct.module.css";
import ThirdProduct from "./ThirdProduct";

function SectionSpecificProduct(props) {
  return (
    <section className={classes.sectionSpecificProduct}>
      <PrimaryProduct />
      <SecondaryProduct />
      <ThirdProduct />
    </section>
  );
}

export default SectionSpecificProduct;
