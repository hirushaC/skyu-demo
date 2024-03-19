import React from "react";
import Component1 from "./HeroV1/Component1";
import Component2 from "./HeroV1/Component2";
import ImageFallback from "../ImageFallback";

const HeroAnimationv1 = () => {
  return (
    <>

      {/* Component 1 */}
      <div className={`absolute sm:-left-32 -left-24 top-0 ml-20 sm:-mt-64 md:-mt-0 lg:ml-0 lg:mt-0 sm:w-full w-[10%]`}>
        <div className="relative z-20">
          <Component1 />
        </div>
      </div>

      {/* Image */}
      <div className="justify-end sm:flex md:block">
        <ImageFallback
          src="/images/hero_section/setImage.svg"
          width={1200}
          height={900}
          alt="setImage"
        />
      </div>

      {/* Component 2 */}
      <div className="absolute lg:-left-20 left-0 lg:bottom-1 -bottom-14 lg:ml-0">
        <div className="relative z-20">
          <Component2 />
        </div>
      </div>

    </>
  );
};

export default HeroAnimationv1;
