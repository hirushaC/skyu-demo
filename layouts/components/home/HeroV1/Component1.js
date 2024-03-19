import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageFallback from '@layouts/components/ImageFallback';

const Component1 = () => {
  const blocks = [
    {
      id: 1,
      image: "/images/hero_section/insightCard1.svg",
      width: 250,
      height: 250
    },
    {
      id: 2,
      image: "/images/hero_section/insightCard2.svg",
      width: 250,
      height: 250
    },
    {
      id: 3,
      image: "/images/hero_section/insightCard3.svg",
      width: 150,
      height: 150
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % blocks.length);
    }, 3000); // Change interval as needed
    return () => clearInterval(interval);
  }, [blocks.length]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1 }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 1 }
    }
  };

  return (
    <div className="grid place-items-center relative w-[100px] sm:h-[250px] sm:w-[250px]">
      <AnimatePresence mode='wait'>
        <motion.div
          key={blocks[current].id}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <ImageFallback
            src={blocks[current].image}
            width={blocks[current].width}
            height={blocks[current].height}
            alt="setInsightImage"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Component1;
