import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animation2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Git version control",
      content: "Own and manage your source code with zero lock-in.",
    },
    {
      title: "CI/CD tools",
      content:
        "Jenkins for automated building, testing, and deployment of code.",
    },
    {
      title: "Containerization +",
      content: "Docker and Kubernetes integrated to optimize across the SLDC.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentSlide, slides.length]);
  

  return (
    <div className="slider-container">
      <AnimatePresence>
        <motion.div
          className="rounded-lg bg-gradient-to-r from-[#0368B1] to-[#0683DE] p-3 w-[500px]"
          key={currentSlide}
          initial={{ opacity: 0, y: 200, x: 100, position: "absolute" }}
          animate={{ opacity: 1, y: 0, x: 0, position: "relative" }}
          exit={{ opacity: 0, y: -200, x: 100, position: "absolute" }}
          transition={{ duration: 2 }}
        >
          <div className="flex gap-1 p-2">
            <div className="circle">
              <span className="center inline-block h-3 w-3 rounded-full bg-[#E8F4FE]"></span>
            </div>
            <div className="circle">
              <span className="center inline-block h-3 w-3 rounded-full bg-[#B9DFFB]"></span>
            </div>
            <div className="circle">
              <span className="box center inline-block h-3 w-3 rounded-full bg-[#73BFF7]"></span>
            </div>
          </div>
          <div className="card__content">
            <h3 className="font-medium text-white ml-7">
              {slides[currentSlide].title}
            </h3>
            <p className="text-md mb-8 text-white text-[18px] mx-8">{slides[currentSlide].content}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Animation2;
