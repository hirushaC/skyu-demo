import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  const icons = [
    {
      src: "/images/icon/icon_30.svg",
      alt: "Icon One",
      position: "top-[-50px] left-1/2 transform -translate-x-1/2",
      style: { filter: "drop-shadow(0px -5px 21px rgba(22, 149, 241, 0.2))" },
    },
    {
      src: "/images/icon/icon_31.svg",
      alt: "Icon Two",
      position: "top-[26%] right-[-50px]",
      style: { filter: "drop-shadow(10px 5px 21px rgba(22, 149, 241, 0.2))" },
    },
    {
      src: "/images/icon/icon_32.svg",
      alt: "Icon Three",
      position: "bottom-[6%] right-[0%]",
      style: { filter: "drop-shadow(10px 5px 21px rgba(22, 149, 241, 0.2))" },
    },
    {
      src: "/images/icon/icon_33.svg",
      alt: "Icon Four",
      position: "bottom-[6%] left-[0%]",
      style: { filter: "drop-shadow(-12px 5px 21px rgba(22, 149, 241, 0.2))" },
    },
    {
      src: "/images/icon/icon_34.svg",
      alt: "Icon Five",
      position: "top-[26%] left-[-50px]",
      style: { filter: "drop-shadow(-12px 5px 21px rgba(22, 149, 241, 0.2))" },
    },
    {
      src: "/images/icon/icon_35.svg",
      alt: "Icon Five",
      position: "bottom-[-50px] left-1/2 transform -translate-x-1/2",
      style: { filter: "drop-shadow(0px 5px 21px rgba(22, 149, 241, 0.2))" },
    },
  ];
  const blocks = [
    {
      card: "/images/hero_section/card1.svg",
      position: "top-[8%] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      width: 300,
    },
    {
      card: "/images/hero_section/card2.svg",
      position: "top-1/4 right-0 transform translate-x-1/2",
      width: 250,
    },
    {
      card: "/images/hero_section/card4.svg",
      position:
        "bottom-1/2 -left-[8%] transform -translate-x-1/2 translate-y-full",
      width: 250,
    },
    {
      card: "/images/hero_section/card3.svg",
      position:
        "bottom-[12%] right-1/2 transform translate-x-1/2 translate-y-full",
      width: 300,
    },
    // {
    //   text: "User Friendly Interface",
    //   position: "top-1/4 left-0 transform -translate-x-1/2",
    // },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.5, duration: 0.5 },
    }),
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative mb-16 mt-12 flex w-full items-center justify-center">
      {/* Center Image Placeholder */}
      <div className="circle-one relative flex items-center justify-center">
        <div className="flex lg:w-[80vw] lg:max-w-[800px] items-center justify-center">
          <Image
            className="w-full"
            src={"/images/hero_section/Laptop.svg"}
            alt="laptop"
            fill
            priority={true}
          />
        </div>

        {/* Blocks */}
        <div className="circle-one absolute">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInVariants}
              className={`z-1 absolute ${block.position}`}
            >
              <span className="rounded-md bg-white">
                <Image
                  className="shadow"
                  src={block.card}
                  alt="card"
                  width={block.width}
                  height={300}
                />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Icons */}
        {/* <div className="circle-two rotation absolute flex items-center justify-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`z-1 absolute ${icon.position}`}
              style={{ animation: "counterRotate 90s linear infinite" }}
            >
              <Image
                className="rounded-full border border-[#B9DFFB]"
                src={icon.src}
                alt={icon.alt}
                width={40}
                height={40}
              />
            </div>
          ))}

          <div className="circle-three" />
        </div> */}
      </div>

      <Image
        className="fancy-shape absolute"
        src="/images/shape/shape_47.svg"
        alt="shape"
        width={83}
        height={83}
      />
    </div>
  );
};

export default HeroAnimation;
