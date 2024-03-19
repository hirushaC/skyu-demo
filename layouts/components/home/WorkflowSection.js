import React from "react";
import ImageFallback from "../ImageFallback";

const WorkflowSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center sm:h2 h4">
        Accelerate innovation with 
        <span className="text-primary"> frictionless architecture</span>
      </h2>
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
