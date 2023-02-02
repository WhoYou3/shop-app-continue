import React from "react";
import { motion } from "framer-motion";

export default function AnimatedPage({ children }) {
  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },

    exit: { opacity: 0, x: -100 },
  };
  return (
    <motion.div
      variants={animation}
      transition={{ delay: 0.5 }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
