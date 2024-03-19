import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
      <ScaleLoader color="#1695f1" size={100} />
    </div>
  );
};

export default Loader;
