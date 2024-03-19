import React, { useEffect, useState } from "react";
import ImageFallback from "../ImageFallback";
import Accordion from "@layouts/shortcodes/Accordion";
import SkeletonImage from "../SkeletonImage";

const SupportSection = ({ bottlenecks }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);

  // Close all other accordions
  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(index);
  };

  // accordionDuration (10000 ms) + a small delay (10 ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpenAccordionIndex(
        (current) => (current + 1) % bottlenecks.list.length
      );
    }, 10010);

    return () => clearInterval(intervalId);
  }, [bottlenecks.list.length]);

  return (
    <>
      <div className={`select-none px-5 text-left`}>
        <h1 className={`sm:text-left text-center sm:h1 h4`}>{bottlenecks.subtitle}<br/>{bottlenecks.title}</h1>
      </div>

      <div className="mx-3 py-16 lg:grid lg:h-[600px] lg:grid-cols-[60%_40%] overflow-hidden">
        <div className="pr-4" id="section-1">
          {bottlenecks.list.map((bottleneck, index) => (
            <div key={"bottleneck-" + index}>
              <Accordion
                title={bottleneck.title}
                index={index}
                totalAccordions={bottlenecks.list.length}
                image={bottleneck.image}
                setCurrentImage={setCurrentImage}
                openAccordionIndex={openAccordionIndex}
                setOpenAccordionIndex={setOpenAccordionIndex}
                onClick={() => handleAccordionClick(index)}
              >
                {bottleneck.subtitle}
              </Accordion>
            </div>
          ))}
        </div>
        <div
          className="relative mt-16 max-w-full lg:absolute lg:right-0 lg:mx-0 lg:mt-0 flex items-center justify-center lg:max-w-[40%]"
          id="section-2"
        >
          <ImageFallback
            src={bottlenecks.image}
            width={700}
            height={700}
            alt={"Missing"}
            style={{ maxWidth: "100%", height: "auto" }} // Ensure the image is responsive
          />
        </div>
      </div>
    </>
  );
};

export default SupportSection;
