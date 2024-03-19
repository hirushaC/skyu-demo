import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Component2 = () => {
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      text: "Security Level",
      box: "High",
      boxColor: "bg-primary",
    },
    {
      id: 2,
      text: "RBAC Access Level",
      box: "Available",
      boxColor: "bg-[#6C5CE7]",
    },
    {
      id: 3,
      text: "Risk Level",
      box: "Low",
      boxColor: "bg-[#FFAD4E]",
    },
  ]);

  const [visibleBlocks, setVisibleBlocks] = useState(blocks.slice(0, 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks((currentBlocks) => {
        if (currentBlocks.length > 1) {
          const nextBlocks = [...currentBlocks]; // Create a copy of the current blocks array
          const shiftedBlock = nextBlocks.shift(); // Remove the first block from the copy
          const newId = nextBlocks[nextBlocks.length - 1].id + 1;
          return [...nextBlocks, { ...shiftedBlock, id: newId }];
        } else {
          // Handle the case for 1 or 0 blocks
          return [...currentBlocks];
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisibleBlocks(blocks.slice(0, 2));
  }, [blocks]);

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: "spring", stiffness: 260, damping: 20 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.25 },
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.95,
      transition: {
        y: { type: "spring", stiffness: 260, damping: 25 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.25 },
      },
    },
  };

  return (
    <div className="relative grid w-72 cursor-default select-none">
      <AnimatePresence initial={false}>
        {visibleBlocks.map((block) => (
          <motion.div
            key={block.id}
            className={`mb-3 flex w-fit items-center justify-center rounded-md border bg-white px-4 sm:py-1 shadow-md`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center">
              <div className="sm:text-[12px] text-[10px] font-medium">{block.text}</div>
              <div className="grid place-items-center py-1">
                <span
                  className={`lg:ml-6 ml-3 lg:px-4 px-2 lg:py-1 py-1 ${block.boxColor} lg:rounded-md rounded-sm sm:text-[11px] text-[8px] font-thin text-white`}
                >
                  {block.box}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Component2;
