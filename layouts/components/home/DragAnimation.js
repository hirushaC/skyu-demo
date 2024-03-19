import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import PercentageLabel from "./PercentageLabel";

const DraggableLine = ({ width, height, containerHeight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const numericHeight = parseInt(containerHeight, 10);
  const centerY = numericHeight / 2;

  const moveDistance = 5;
  const initialLeftArrowX = 6;
  const initialRightArrowX = 50;

  const leftArrowX = isHovered
    ? initialLeftArrowX - moveDistance
    : initialLeftArrowX;
  const rightArrowX = isHovered
    ? initialRightArrowX + moveDistance
    : initialRightArrowX;

  return (
    <motion.svg
      width="86"
      height={height}
      viewBox={`0 0 86 ${numericHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <defs>
        <filter id="f3" width="120" height="120">
          <feOffset in="SourceAlpha" dx="10" result="offsetBlur" />
          <feGaussianBlur in="offsetBlur" stdDeviation="20" result="blurred" />
          <feFlood floodColor="#0683DE" result="color" />
          <feComposite in="color" in2="blurred" operator="in" result="shadow" />
          <feBlend in="SourceGraphic" in2="blurOut" />
          <feBlend in="SourceGraphic" in2="shadow" mode="normal" />
        </filter>
      </defs>
      <path
        d={`M43.9385 3L42.9936 ${numericHeight - 3}`}
        stroke="#0683DE"
        strokeWidth="5"
        strokeLinecap="round"
        filter="url(#f3)"
      />
      <rect
        x="36"
        y={(centerY - 113 / 2).toString()}
        width="14"
        height="113"
        rx="2"
        fill="#1879ED"
      />
      {/* <!-- First icon, slightly to the left of center --> */}
      <motion.g
        initial={{ x: initialLeftArrowX }}
        animate={{ x: leftArrowX }}
        transition={{ duration: 0.2 }}
      >
        <svg
          y={(centerY - 15).toString()}
          height="30"
          viewBox="0 0 24 24"
          width="30"
        >
          <path
            d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
            fill="#0683DE"
          />
        </svg>
      </motion.g>
      {/* <!-- Second icon, slightly to the right of center --> */}
      <motion.g
        initial={{ x: initialRightArrowX }}
        animate={{ x: rightArrowX }}
        transition={{ duration: 0.2 }}
      >
        <svg
          y={(centerY - 15).toString()}
          height="30"
          viewBox="0 0 24 24"
          width="30"
        >
          <path
            d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
            fill="#0683DE"
          />
        </svg>
      </motion.g>
    </motion.svg>
  );
};

const DragAnimation = ({ leftImage, rightImage, subtitle }) => {
  const containerRef = useRef();
  const x = useMotionValue(0);
  const [svgSize, setSvgSize] = useState({ width: "86px", height: "700px" });

  // set values here for variables
  const [containerHeight, setContainerHeight] = useState("700px");
  const [barWidth, setBarWidth] = useState("5px");
  const [imageContainerPadding, setImageContainerPadding] = useState("56.25%");

  const [applicationPercent, setApplicationPercent] = useState(50);
  const [platformPercent, setPlatformPercent] = useState(50);

  const updatePercentages = (xValue, containerWidth) => {
    const normalizedXValue = Math.max(0, Math.min(xValue, containerWidth));
    const positionPercentage = (normalizedXValue / containerWidth) * 100;
    let appPercent = 20 + (positionPercentage * (80 - 20)) / 100;
    appPercent = Math.max(20, Math.min(appPercent, 80));

    setApplicationPercent(appPercent);
    setPlatformPercent(100 - appPercent);
  };

  const clipPathLeft = useMotionValue(`polygon(0 0, 0% 0, 0% 100%, 0 100%)`);
  const clipPathRight = useMotionValue(
    `polygon(100% 0, 100% 0, 100% 100%, 100% 100%)`
  );

  useEffect(() => {
    const updateSvgSize = () => {
      const vpWidth = window.innerWidth;
      if (vpWidth < 768) {
        setSvgSize({ width: "60px", height: "300px" });
      } else {
        setSvgSize({ width: "86px", height: "700px" });
      }
    };

    window.addEventListener("resize", updateSvgSize);
    updateSvgSize();

    return () => window.removeEventListener("resize", updateSvgSize);
  }, []);

  useEffect(() => {
    const updateContainerHeight = () => {
      const vpWidth = window.innerWidth;
      if (vpWidth < 768) {
        setContainerHeight("350px");
        setBarWidth("5px");
        setImageContainerPadding("75%");
      } else {
        setContainerHeight("700px");
        setBarWidth("5px");
        setImageContainerPadding("56.25%");
      }
    };

    window.addEventListener("resize", updateContainerHeight);
    updateContainerHeight();

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  useEffect(() => {
    const unsubscribeX = x.onChange((latestX) => {
      const containerWidth = containerRef.current.offsetWidth;
      updatePercentages(latestX, containerWidth);
      const percentage = (latestX / containerWidth) * 100;
      clipPathLeft.set(
        `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`
      );
      clipPathRight.set(
        `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`
      );
    });

    const handleResize = () => {
      const containerWidth = containerRef.current
        ? containerRef.current.offsetWidth
        : 0;
      x.set(containerWidth * ((applicationPercent - 20) / 60));
      updatePercentages(x.get(), containerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      unsubscribeX();
      window.removeEventListener("resize", handleResize);
    };
  }, [x, clipPathLeft, clipPathRight, applicationPercent]);

  const imageContainerStyle = {
    position: "absolute",
    width: "100%",
    height: "0",
    paddingTop: imageContainerPadding,
    overflow: "hidden",
  };

  const imageStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <>
      <p className="my-5 text-theme-dark text-xs text-center">{subtitle}</p>

      <div className="mx-auto mb-10 w-2/3 sm:w-full">
        <PercentageLabel
          applicationPercent={applicationPercent}
          platformPercent={platformPercent}
        />
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto overflow-hidden"
        style={{ height: containerHeight }}
      >
        <div style={imageContainerStyle}>
          <motion.div
            style={{
              ...imageStyle,
              clipPath: clipPathLeft,
            }}
          >
            <Image src={leftImage} alt="Left Image" fill />
          </motion.div>
        </div>
        <div style={imageContainerStyle}>
          <motion.div
            style={{
              ...imageStyle,
              clipPath: clipPathRight,
            }}
          >
            <Image src={rightImage} alt="Right Image" fill />
          </motion.div>
        </div>
        <motion.div
          style={{
            zIndex: 10,
            position: "absolute",
            top: 0,
            left: 0,
            translateX: "-50%",
            width: "86px",
            height: containerHeight,
            cursor: "ew-resize",
            x,
          }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.2}
          onDrag={(event, info) => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const relativeX =
              info.point.x - containerRect.left - containerRect.width / 2;
            updatePercentages(
              relativeX + containerRect.width / 2,
              containerRect.width
            );
          }}
        >
          <DraggableLine
            width={svgSize.width}
            height={svgSize.height}
            containerHeight={containerHeight}
          />
        </motion.div>
      </div>
    </>
  );
};

export default DragAnimation;
