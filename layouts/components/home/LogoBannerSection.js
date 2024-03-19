import React, { useEffect, useState } from "react";
import ImageFallback from "../ImageFallback";

const LogoBannerSection = ({ brands }) => {
  const [itemWidth, setItemWidth] = useState("200px");
  const [itemHeight, setItemHeight] = useState("200px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemWidth("100%");
        setItemHeight("100px");
      } else {
        setItemWidth("1000px");
        setItemHeight("300px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="px-4 pb-16 text-center">
        <h1 className={`pt-6 sm:h1 h4`}>
          Integrations to{" "}
          <span className="text-primary">support any developer experience</span>{" "}
          you need
        </h1>
      </div>
      <div className={`mx-2`}>
        <div className="flex flex-col">
          <div className="items-center justify-center flex">
            <div
              className={`cursor-default grayscale-0 transition`}
              style={{
                width: itemWidth,
                height: itemHeight,
              }}
            >
              <ImageFallback
                className="block h-full w-full object-contain"
                src={"/images/brands/logo_banner.svg"}
                alt="Tech stack"
                fill={true}
                priority={true}
              />
            </div>
          </div>
          {/* First row */}
          {/* <div className="sm:flex flex-col items-center justify-center gap-3 sm:flex-row grid grid-cols-3 sm:gap-10">
            {brands
              .slice(0, Math.ceil(brands.length / 2))
              .map((brand, index) => (
                <div
                  className={`cursor-default grayscale-0 transition`}
                  key={"brands_white_row1-" + index}
                  style={{
                    width: itemWidth,
                    height: "80px",
                  }}
                >
                  <ImageFallback
                    className="block h-full w-full object-contain"
                    src={brand}
                    alt=""
                    fill={true}
                    priority={true}
                  />
                </div>
              ))}
          </div> */}
          {/* Second row */}
          {/* <div className="sm:flex flex-col items-center justify-center gap-3 sm:flex-row grid grid-cols-3  sm:gap-10">
            {brands.slice(Math.ceil(brands.length / 2)).map((brand, index) => (
              <div
                className={`cursor-default transition grayscale-0`}
                key={"brands_white_row2-" + index}
                style={{
                  width: itemWidth,
                  height: "80px",
                }}
              >
                <ImageFallback
                  className="block h-full w-full object-contain"
                  src={brand}
                  alt=""
                  fill={true}
                  priority={true}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LogoBannerSection;
