import ImageFallback from "@layouts/components/ImageFallback";
import React from "react";
import { motion } from "framer-motion";

const Component4 = () => {
  const variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <ImageFallback
        src="/images/hero_section/insightCard2.svg"
        width={250}
        height={250}
        alt="setInsightImage"
      />
    </motion.div>
  );
};

export default Component4;
