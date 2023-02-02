import React from "react";
import classes from "./Products.module.css";
import Product from "../components/Products/Product";
import SectionKidOfProducts from "../components/Home/SectionKindOfProducts";

function Products() {
  return (
    <div>
      <div className={classes.products}>HEADPHONES</div>
      <Product />
      <Product />
      <Product />
      <SectionKidOfProducts />
    </div>
  );
}

export default Products;
