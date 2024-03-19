import ImageFallback from "@layouts/components/ImageFallback";
import React from "react";

const Card = ({ title, children, icon }) => {
  return (
    <>
      <div className="min-h-72 grid h-full items-center justify-center rounded-lg border border-[#E8F4FE] p-4 lg:h-72">
        <div>
          <div className="flex items-center justify-left">
            <ImageFallback src={icon} width={50} height={50} alt={title}/>
            <h5 className="py-2 text-center lg:text-left">{title}</h5>
          </div>

          <p className="text-[15px] line-clamp-4 transition-all duration-300 ease-in-out hover:block">{children}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
