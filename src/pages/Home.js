import React from "react";
import SectionMain from "../components/Home/SectionMain";
import SectionKindOfProducts from "../components/Home/SectionKindOfProducts";
import SectionSpecificProduct from "../components/Home/SectionSpecificProduct";
import { motion } from "framer-motion";

function Home(props) {
  document.body.style.overflow = "auto";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0 }}
    >
      <SectionMain />
      <SectionKindOfProducts />
      <SectionSpecificProduct />
    </motion.div>
  );
}

export default Home;
