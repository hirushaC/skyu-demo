import React from "react";
import ImageFallback from "../ImageFallback";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { ThreeDPin } from "./ThreeDPin";
import { IoIosArrowRoundForward } from "react-icons/io";

const SemiFeatureSection = ({ speciality }) => {
  return (
<div className="relative py-10">
      <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
        <div>
          <h4 className="mb-5">Beta Release</h4>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {speciality.map((item, index) => (
              <div className="rounded-lg bg-white p-1" key={index}>
                <div className="animate m-4">
                  <div className="grid grid-cols-2">
                    <ImageFallback
                      src={item.image}
                      width={60}
                      height={60}
                      alt={item.title}
                    />
                    <div className="flex items-center justify-end">
                      <p className="rounded-lg border bg-theme-light px-3 py-1 text-sm text-theme-dark">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <h5 className="mt-4 font-medium">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center rounded-lg mt-10 sm:mt-0">
          <ThreeDPin
            title={"Coming Soon"}
            href={"/"}
            className={"select-none bg-theme-light"}
          >
            <div className="grid h-auto w-[300px] place-items-center transition-all delay-700 hover:h-64 lg:min-w-[400px]">
              <div className="mx-6 grid grid-rows-2 place-items-center">
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="select-none">Alpha Release</h1>
                  <p className="flex select-none items-center text-lg font-medium text-primary">
                    Discover our Marketplace <span className="sm:block hidden"><IoIosArrowRoundForward /></span>
                  </p>
                </div>
                <div className="mx-10 text-center">
                  <p className="select-none text-base text-[#878B9E]">
                    Build your Internal and External Portal with SkyU
                  </p>
                </div>
              </div>
            </div>
          </ThreeDPin>
        </div>
      </div>
    </div>
  );
};

export default SemiFeatureSection;
