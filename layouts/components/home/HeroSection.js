import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import DynamicTextAnimation from "./DynamicTextAnimation";

const LottiePlayer = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });
const LottieControls = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Controls), { ssr: false });

const HeroSection = ({ banner, stats }) => {
  const [lottieSize, setLottieSize] = useState("100px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLottieSize("60px");
      } else {
        setLottieSize("100px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const upDownAnimation = {
    y: ["40%", "0%", "40%"],
    x: ["60%", "0%", "60%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
        ease: "easeInOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="banner-bg"></div>
      <div className="flex flex-col items-center lg:justify-between justify-evenly md:h-[100dvh] lg:flex-row">
        <div className="flex h-[100dvh] max-h-screen flex-col items-center justify-center md:block md:h-fit lg:w-1/2">
          <h1
            className={`select-none text-[55px] text-center lg:text-left text-white md:text-[64px] leading-tight`}
          >
            {banner.title}
          </h1>

          <div className="flex flex-row justify-center lg:justify-start">
          <div className="bg-white px-4 py-2 w-fit rounded-md">
            <h1 className="select-none bg-gradient-to-tr from-[#11172C] via-[#333A4F] to-[#11172C] bg-clip-text text-[55px] text-transparent md:text-[64px]">
              <DynamicTextAnimation text={banner.animated_title} />
            </h1>
          </div></div>

          <p className="animate mb-10 mt-5 text-center text-sm text-[#E2E4EB] sm:text-lg sm:leading-8 lg:text-left">
            {banner.description}
          </p>
          <div className="text-center lg:text-left">
            <Link
              className="btn btn-secondary font-medium"
              href={banner.link.href}
            >
              {banner.link.label}
            </Link>
          </div>
        </div>

        <div className="z-10 flex items-center justify-center">
          <div className="animate banner-img-container relative">
            <div className="">
              <div className="-mt-16 mb-16 rounded-lg border border-white/50 bg-white bg-opacity-25 px-36 py-24 text-[#E2E4EB] shadow-md backdrop-blur sm:mb-0 sm:mt-0">
                Pending Video ...
              </div>
            </div>
          </div>
        </div>
        {/* <motion.div
        className={`absolute -right-5 top-4 h-96 w-96 rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-white opacity-40  blur-3xl lg:flex`}
        animate={upDownAnimation}
        initial={{ y: "0%" }}
      ></motion.div> */}
      </div>

      {/* Feature cards */}
      <div className="animate container right-0 top-[98%] z-20 rounded-lg sm:mt-16 md:mb-40 md:block md:border md:bg-white md:py-6 md:shadow-lg lg:absolute">
        <div className="mx-auto grid w-full place-content-evenly gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:place-items-center">
          {stats.lists.map((stat, index) => (
            <div
              className="flex flex-row items-center justify-center gap-2 rounded-md bg-white px-3 shadow-lg sm:px-0 sm:shadow-none"
              key={index}
            >
              <LottiePlayer
                autoplay
                loop
                src={stat.icon}
                style={{ height: lottieSize, width: lottieSize }}
              >
                <LottieControls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </LottiePlayer>
              <div className="grid md:col-span-2">
                <h4 className="lg:h4 h6">{stat.title}</h4>
                <p className="text-xs text-[#878B9E] sm:text-base">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
