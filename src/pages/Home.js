import React from "react";
import SectionMain from "../components/Home/SectionMain";
import SectionKindOfProducts from "../components/Home/SectionKindOfProducts";
import SectionSpecificProduct from "../components/Home/SectionSpecificProduct";

function Home(props) {
  return (
    <div>
      <SectionMain />
      <SectionKindOfProducts />
      <SectionSpecificProduct />
    </div>
  );
}

export default Home;
