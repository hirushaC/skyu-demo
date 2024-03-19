import React from "react";
import ImageFallback from "../ImageFallback";
import { motion } from "framer-motion";

const CloudAnimation = () => {
  const movement = {
    x: ["80vw", "-100vw", "80vw"],
    y: ["0%", "-10%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 500,
        ease: "linear",
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  const reverse_movement = {
    x: ["-80vw", "80vw", "-80vw"],
    y: ["0%", "-10%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 500,
        ease: "linear",
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  const positions = [
    {
      position: "top-0",
    },
    {
      position: "bottom-10 left-[5%]",
    },
  ];

  return (
    <div>
      {positions.map((item, index) => (
        <div key={index}>
          <motion.img
            className={`absolute drop-shadow-lg ${item.position}`}
            src="/images/cloud.svg"
            width={150}
            height={150}
            alt="cloud"
            animate={movement}
          />
        </div>
      ))}
    </div>
  );
};

export default CloudAnimation;
