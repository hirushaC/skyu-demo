import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Component3 = () => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      while (isMounted) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (!isMounted) break; // Check if still mounted
        await controls.start("visible");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (!isMounted) break; // Check if still mounted
        await controls.start("hidden");
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    };

    sequence();

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls]);

  const popupVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="my-auto">
      <motion.span
        className="ml-5 rounded-md bg-[#424B66] px-5 py-2 text-xs font-thin text-white"
        variants={popupVariants}
        initial="hidden"
        animate={controls}
      >
        DevOps Platform
      </motion.span>
    </div>
  );
};

export default Component3;
