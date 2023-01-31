import SpecificProduct from "./SpecificProduct";
import classes from "./SectionSpecificProduct.module.css";

function SectionSpecificProduct(props) {
  return (
    <section className={classes.sectionSpecificProduct}>
      <SpecificProduct />
      <SpecificProduct />
      <SpecificProduct />
    </section>
  );
}

export default SectionSpecificProduct;
