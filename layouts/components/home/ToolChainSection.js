import Link from "next/link";
import HeroAnimationv1 from "./HeroAnimationv1";
import { FaPlay } from "react-icons/fa";
import ImageFallback from "../ImageFallback";

const ToolChainSection = ({ speciality }) => {
  return (
    <div className="grid grid-cols-1 md:mx-4 md:grid-cols-2">
      <div className="lg:justify-left lg:row lg:flex lg:items-center">
        <div className="text-center lg:w-2/3 lg:text-left">
        <h2 className={`pt-5 lg:pt-0 sm:h2 h3`}>Alpha release</h2>
          <h5 className={`text-primary sm:h5 h6`}>Discover our marketplace</h5>
          <p className="mt-5 font-normal text-[#878B9E]">
            The upcoming release will introduce our Blueprint Composition Engine
            derived from the{" "}
            <span className="font-medium text-primary"
            >
              DORA core model
            </span>
            . Build 100% custom templates in cross-functional collaboration to
            drive innovation and competitive edge for the entire organisation.
          </p>
        </div>
        <div className="pt-10">
          <div className="mb-5 flex items-center justify-center sm:justify-start gap-3">
            <h5>Beta features included </h5>
            <span className="btn rounded-sm bg-primary px-2 py-1 text-sm text-white">
              beta
            </span>
          </div>

          <div className="flex flex-row items-center justify-center sm:justify-start flex-wrap gap-2 sm:mr-20">
            {speciality.map((item, index) => (
              <div key={index}>
                <div className="rounded-md border border-[#C9CCD9] p-2 bg-white">
                  <div className="flex items-center justify-start gap-1">
                    <ImageFallback
                      src={item.image}
                      width={30}
                      height={30}
                      alt={item.title}
                    />
                    <p className="line-clamp-none text-xs">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container z-10 flex items-center justify-center py-20 sm:my-0">
        <div className="banner-img-container relative">
          <HeroAnimationv1 />
        </div>
      </div>
    </div>
  );
};

export default ToolChainSection;
