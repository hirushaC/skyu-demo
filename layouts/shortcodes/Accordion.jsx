import { useTheme } from "@layouts/ThemeContext";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from "react";

const Accordion = ({
  title,
  children,
  index,
  totalAccordions,
  image,
  setCurrentImage,
  openAccordionIndex,
  setOpenAccordionIndex,
  onClick,
}) => {
  const [show, setShow] = useState(false);
  const [lineX2, setLineX2] = useState(0);
  const { darkTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutIdRef = useRef(null);
  const intervalIdRef = useRef(null);

  const accordionDuration = 5000;

  const startAnimation = (cb) => {
    setShow(true);
    const startTime = Date.now();
    intervalIdRef.current = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime / accordionDuration) * 100;
      setLineX2(progress);

      if (elapsedTime >= accordionDuration) {
        clearInterval(intervalIdRef.current);
        setShow(false);
        setLineX2(0); // Reset progress
        if (cb) cb(); // Callback to continue sequence
      }
    }, 16);
  };

  useEffect(() => {

    if (openAccordionIndex === index) {
      setIsAnimating(true);
      setCurrentImage(image);
      setTimeout(() => setIsAnimating(false), 500);
      startAnimation(() => {

        let nextIndex = (index + 1) % totalAccordions;
        setOpenAccordionIndex(nextIndex);
      });
    } else {
      setShow(false);
      setLineX2(0);
    }

    return () => {
      clearTimeout(timeoutIdRef.current);
      clearInterval(intervalIdRef.current);
    };
  }, [index, totalAccordions, image, setCurrentImage, openAccordionIndex, setOpenAccordionIndex]);


  const contentAnimation = {
    closed: { 
      opacity: 0,
      maxHeight: 0,
      transition: { opacity: 0.2, maxHeight: 0.5 }
    },
    open: {
      opacity: 1,
      maxHeight: '60px', // Adjust this based on the maximum content size you expect
      transition: { opacity: 0.2, maxHeight: 0.5 }
    }
  };

  return (
    <>
<div className="relative pl-6 border-l-2 border-[#E2E4EB]" id="liner">
  {/* Blue Line */}
  <div className="absolute left-0 top-0 bottom-0 w-[4px] -ml-1 h-7 bg-[#0683DE]"></div>

  <button className={`relative cursor-default w-full text-left text-[20px] font-medium -mt-4 mb-4`}>
    <div className={`p-4 rounded-lg transition-colors duration-300 ${index % 2 == 1 ? 'bg-white' : 'bg-transparent'}`}>
      {/* Title and Content */}
      <div className="justify-left col-span-3 flex items-center text-lg lg:text-lg font-medium">
        {title}
      </div>
      <div className={`py-2 leading-normal text-[#878B9E] text-sm font-normal lg:text-[16px]`}>
        {children}
      </div>
    </div>
  </button>
</div>

    </>
  );
};

export default Accordion;
