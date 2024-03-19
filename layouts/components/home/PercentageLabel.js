import React from "react";

const PercentageLabel = ({ applicationPercent, platformPercent }) => {
  const roundedApplicationPercent = Math.round(applicationPercent);
  const roundedPlatformPercent = Math.round(platformPercent);

  return (
    <>
    <div className="row" style={{ display: "flex" }}>
      <div
        style={{
          width: `${applicationPercent}%`,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <span className="pl-4 text-[#73BFF7] sm:text-base text-xs">
          {roundedApplicationPercent}%
        </span>
      </div>
      <div
        style={{
          width: `${platformPercent}%`,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <span className="pr-4 text-primary sm:text-base text-xs">{roundedPlatformPercent}%</span>
      </div>
    </div>

    {/* Linear component */}
    <div className="row bg-[#73BFF7] sm:rounded-lg rounded" style={{ display: "flex" }}>
      <div
        style={{
          width: `${applicationPercent}%`,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
        className="bg-[#73BFF7] sm:py-3 py-1 sm:rounded-l-lg rounded-l-md"
      >
        <span className="pl-4 text-white sm:text-base text-xs">
          Application
        </span>
      </div>
      <div
        style={{
          width: `${platformPercent}%`,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
        className="bg-primary sm:py-3 py-1 sm:rounded-r-lg sm:rounded-l-md rounded-r rounded-l"
      >
        <span className="pr-4 text-white sm:text-base text-xs">Platform</span>
      </div>
    </div>
    </>
  );
};

export default PercentageLabel;
