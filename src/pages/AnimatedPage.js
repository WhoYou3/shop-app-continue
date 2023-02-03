import React from "react";
import { motion } from "framer-motion";

export default function AnimatedPage({ children }) {
  // const animation = {
  //   initial: { opacity: 0, x: 100 },
  //   animate: { opacity: 1, x: 0, tran },

  //   exit: { opacity: 0, x: "100%" },
  // };
  return (
    <motion.div
    // variants={animation}
    // initial={{ opacity: 0, x: 100 }}
    // animate={{ opacity: 1, x: 0, transition: { delay: 2 } }}
    // exit={{ opacity: 0, x: 100 }}
    >
      {children}
    </motion.div>
  );
}
