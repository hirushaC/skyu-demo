import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";
import DragAnimation from "./DragAnimation";

const ToggleSection = ({ intro }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="lg:justify-left w-full lg:row lg:flex lg:items-center">
      <div className="px-8 text-center">
        <h2 className={`sm:h2 h4 pt-5 lg:pt-0`}>{intro.title}</h2>
        {markdownify(intro.description, "p", "mt-5 text-[#878B9E] lg:mx-20")}
      </div>

      <div className="pt-12">
        <DragAnimation
          leftImage={intro.wthumbnail}
          rightImage={intro.thumbnail}
          subtitle={intro.subtitle}
        />
      </div>
    </div>
  );
};

export default ToggleSection;
