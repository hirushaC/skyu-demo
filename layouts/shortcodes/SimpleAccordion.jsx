import React, { useState } from "react";

const SimpleAccordion = ({ title, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`mb-2 overflow-hidden rounded-lg border-b border-[#C9CCD9] p-5  hover:shadow-lg ${
        show && "bg-theme-light text-[#878B9E] shadow-lg"
      }`}
    >
      <button
        className={`relative flex w-full flex-row px-4 py-3 text-left font-medium ${
          show && "bg-theme-light"
        }`}
        onClick={() => setShow(!show)}
      >
        <div className="flex items-start justify-start">
          <h5 className="sm:h5 h6 mr-10 font-medium">{title}</h5>
        </div>

        <svg
          className={`absolute right-4 top-1/2 m-0 h-4 w-4 -translate-y-1/2 ${
            show && "rotate-180 text-[#424B66]"
          }`}
          x="0px"
          y="0px"
          viewBox="0 0 512.011 512.011"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
          />
        </svg>
      </button>
      <p className={`border-t px-4 py-3 text-[#878B9E] ${!show && "hidden"}`}>
        {children}
      </p>
    </div>
  );
};

export default SimpleAccordion;
