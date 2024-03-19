import React from "react";
import ImageFallback from "./ImageFallback";

const Cards = () => {
  return (
    <div className="flex w-full items-center justify-center px-9">
      <div className="mb-6 lg:grid grid-cols-2 rounded-lg border border-gray-300 bg-gradient-to-r from-cyan-500 to-primary px-4 pb-5">
        <div className="col-span-1 text-left lg:mt-0 mt-[50px] flex justify-center items-center pl-5 lg:pb-0 pb-9">
          <h4 tabIndex="0" className="mb-3 text-white focus:outline-none">
            Integrations to support any developer experience you need
          </h4>
          {/* <p tabIndex="0" className="text-sm text-white focus:outline-none">
            Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
            neque porro quisquam est, quid malum, sensu iudicari, sed ut
            alterum.
          </p> */}
        </div>

        <div className="lg:col-span-1 lg:ml-0 mt-2 flex h-full w-full object-cover rounded-lg overflow-hidden justify-center">
          <ImageFallback
            className="object-cover rounded-lg mix-blend-normal"
            src="/images/feature-2.png"
            alt="Image Alt Text"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;