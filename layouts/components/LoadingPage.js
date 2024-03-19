import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import ImageFallback from "./ImageFallback";
import CountDown from "./home/CountDown";
import DynamicTextAnimation from "./home/DynamicTextAnimation";
import Link from "next/link";
import { TbBellFilled } from "react-icons/tb";
import { TbBellRingingFilled } from "react-icons/tb";
import { useState } from "react";

const LoadingPage = ({ onComplete }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [hovering, setHovering] = useState(false);

  const upDownAnimation = {
    y: ["0%", "-10%", "0%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="w-full">
        <div
          className={`relative flex h-[100dvh] select-none flex-col items-center overflow-hidden bg-[#0368B1] ${
            onComplete ? "" : "hidden"
          }`}
        >
          <div className="m-auto grid place-items-center">
            <div className="mb-9">
              <ImageFallback
                src="/images/Logo White.svg"
                width={150}
                height={150}
                alt="Logo"
              />
            </div>
            <div className="text-center">
              <h2 className="text-[24px] font-medium text-white md:mb-1 md:text-[40px]">
                <DynamicTextAnimation text={"We are launching soon!"} />
              </h2>
              <p className="font-thin text-[#F7F8FE]">Melbourne 2024</p>
            </div>

            <div className="my-10">
              <CountDown onComplete={onComplete} />
            </div>
            <div className="mx-10 text-left text-xs font-thin leading-5 text-[#E2E4EB] sm:mx-auto">
              <ul>
                <li className="flex">
                  {" "}
                  <span className="pr-2"> - </span> Built with a developer-first
                  mindset.
                </li>
                <li className="flex">
                  {" "}
                  <span className="pr-2"> - </span> Streamlined DevOps. No more
                  toolchain chaos.
                </li>
                <li className="flex">
                  {" "}
                  <span className="pr-2"> - </span> Start the journey towards
                  engineering excellence!
                </li>
              </ul>
            </div>

            {/* <div className="mt-5 lg:mt-10">
              <Link href={"/"}>
                <div
                  className="flex items-center rounded-md bg-white px-3 py-1 text-[13px] font-medium text-[#0368B1] lg:px-5 lg:py-2 lg:text-[14px]"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  onClick={() => setHovering(true)}
                >
                  Notify Me
                  <span className="ml-1">
                    {hovering ? (
                      <TbBellRingingFilled className="rotate-45 transition-all delay-300 " />
                    ) : (
                      <TbBellFilled />
                    )}
                  </span>
                </div>
              </Link>
            </div> */}
          </div>

          {/* Image in the bottom left corner */}
          <div className="absolute -bottom-3 left-0 w-[50%] sm:w-fit">
            <Image
              src="/images/left_image.svg"
              alt="Image 1"
              width={200}
              height={200}
            />
          </div>

          {/* Image in the bottom right corner */}
          <div className="absolute bottom-0 right-0 w-[50%] sm:w-fit">
            <motion.img
              className="absolute bottom-[20%] z-auto"
              src="/images/cloud.svg"
              width={100}
              height={100}
              alt="cloud"
              animate={upDownAnimation}
              initial={{ y: "0%" }}
            />
            <Image
              src="/images/right_image.svg"
              alt="Image 2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
