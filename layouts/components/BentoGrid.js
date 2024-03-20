// BentoGrid.js

import React from "react";
import { cn } from "@lib/utils/cn";
import ImageFallback from "./ImageFallback";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ index, className, title, description, icon }) => {
  return (
    <div
      className={cn(
        "shadow-input group row-span-1 flex flex-col items-center justify-center space-y-4 rounded-xl border border-transparent bg-white py-4 px-8 transition duration-200 hover:shadow-xl hover:shadow-sky-50",
        className
      )}
    >
      <div className="flex gap-6">
        {/* <div className={`h-48 w-64 bg-primary rounded-2xl ${index === 3 || index === 6 ? "block" : "hidden"}`}></div> */}
        <div className="select-none">  {/* className="transition duration-200 group-hover:translate-x-2" */}
          <ImageFallback
            className="banner-img rounded-lg"
            src={icon}
            width={40}
            height={40}
            priority={true}
            alt=""
          />
          <div className={`h5 mb-2 mt-2 font-medium`}>{title}</div>
          <div className="text-sm font-normal text-[#878B9E]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
