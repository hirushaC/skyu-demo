import { useTheme } from "@layouts/ThemeContext";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ImageFallback from "../ImageFallback";

const Tab = ({
  title,
  description,
  image,
  darkTheme,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  <div
    className="items-center lg:grid lg:grid-cols-2 py-10"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="relative z-10 col-span-1 items-center justify-center bg-white text-center lg:my-[100px] lg:w-full lg:pl-9 lg:text-left">
      <h4 className={`mb-4 ${darkTheme ? "text-white" : "text-gray-700"}`}>
        {title}
      </h4>
      <ul
        className={`list-disc text-center py-4 ${
          description.length > 1 && "pl-4"
        } text-left ${darkTheme ? "text-white" : "text-gray-600"}`}
      >
        {description.length > 1
          ? description.map((item, index) => <li key={index}>{item.title}</li>)
          : description.map((item, index) => <p key={index}>{item.title}</p>)}
      </ul>
    </div>

    <div className="col-span-1 mx-auto mt-12 flex items-center justify-center py-4 lg:mt-0">
      <div className={`banner-img w-auto rounded-lg`}>
        <ImageFallback src={image} width={450} height={100} alt={title} />
      </div>
    </div>
  </div>
);

const MobileTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleTabs, setVisibleTabs] = useState(10);

  const { darkTheme, toggleTheme } = useTheme();
  const tabsContainerRef = useRef(null);
  const lastTabRef = useRef(null);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const handleScroll = useCallback(
    (e) => {
      const delta = e.deltaY;
      if (delta > 0 && activeTab < tabs.length) {
        setActiveTab(activeTab + 1);
        e.preventDefault();
      } else if (delta < 0 && activeTab > 1) {
        setActiveTab(activeTab - 1);
        e.preventDefault();
      }
    },
    [activeTab, tabs]
  );

  useEffect(() => {
    const tabsContainer = tabsContainerRef.current;
    tabsContainer.addEventListener("wheel", handleScroll);

    return () => {
      tabsContainer.removeEventListener("wheel", handleScroll);
    };
  }, [activeTab, handleScroll]);

  const handleMouseEnter = () => {
    document.body.style.overflow = "auto";
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex w-fit items-center justify-center">
          <div
            ref={tabsContainerRef}
            className="grid-rows-5 items-center lg:grid"
          >
            {tabs.slice(0, 6).map((tab, index) => (
              <button
                key={index}
                onClick={() => changeTab(index + 1)}
                className={`m-2 w-64 whitespace-nowrap font-medium rounded-md px-4 py-3 text-center text-sm lg:m-3 lg:border ${
                  activeTab === index + 1
                    ? "bg-primary text-white"
                    : " border shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-theme-light bg-white text-[#424B66]"
                }`}
              >
                {tab.title}
              </button>
            ))}
            <div className="py-8">
              <Link
                href={"/platform"}
                className="flex items-center justify-center text-sm text-primary hover:text-[#0368B1]"
              >
                Explore more <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div
          className="relative rounded-b p-4"
          style={{
            transition: "transform 3s ease-in-out",
            overflowY: "auto",
          }}
          ref={lastTabRef}
        >
          <div
            className={`slider flex rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border border-theme-light shadow-theme-light p-5 transition-all ${
              darkTheme
                ? "border border-sky-500 bg-gradient-to-r from-[#11172C] to-[#202840]"
                : "bg-opacity-10 bg-gradient-to-r from-white to-white backdrop-blur-xl backdrop-sepia-0 backdrop-filter"
            }`}
          >
            {tabs.slice(0, visibleTabs).map((tab, index) => (
              <div
                key={index}
                className={activeTab === index + 1 ? "block" : "hidden"}
              >
                <Tab
                  {...tab}
                  darkTheme={darkTheme}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileTabs;
