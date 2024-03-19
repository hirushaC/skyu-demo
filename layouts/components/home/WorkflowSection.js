import React from "react";
import ImageFallback from "../ImageFallback";

const WorkflowSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center sm:h1 h4">
        Accelerate innovation with 
        <span className="text-primary"> frictionless architecture</span>
      </h1>
      <ImageFallback
        className="mx-auto mb-10 mt-20"
        src="/images/workflow.svg"
        width={1400}
        height={1400}
        alt={"Missing"}
        loading="lazy"
      />
    </div>
  );
};

export default WorkflowSection;
