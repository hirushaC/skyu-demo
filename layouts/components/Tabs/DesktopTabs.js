import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@layouts/ThemeContext";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import ImageFallback from "../ImageFallback";

const Tab = ({ id, title, description, image, darkTheme, index, inView }) => (
  <motion.div
    className="items-center sm:h-[600px] flex flex-row"
    id={`tab-${id}`}
    style={{ scrollSnapAlign: "start" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 1 }}
    transition={{ duration: 0.5 }}
  >
    <div
      className={`relative z-10 text-center lg:text-left ml-12 p-4 w-[70%]`}
    >
      <h4 className={`font-medium`}>{title}</h4>
      <ul
        className={`list-disc py-4 font-normal text-sm leading-7 mx-auto sm:mr-20 ${
          description.length > 1 && "pl-4"
        } text-left text-[#878B9E]`}
      >
        {description.length > 1
          ? description.map((item, index) => <li key={index}>{item.title}</li>)
          : description.map((item, index) => <p key={index}>{item.title}</p>)}
      </ul>
    </div>

    <div className="flex items-center justify-center lg:mt-0">
      <div
        className={`rounded-lg`}
      >
        <ImageFallback
          src={image}
          width={1200}
          height={1200}
          alt={title}
          loading="lazy"
        />
      </div>
    </div>
  </motion.div>
);

const DesktopTabs = ({ tabs }) => {
  const [tabsInView, setTabsInView] = useState(
    new Array(tabs.length).fill(false)
  );
  const sidenavControls = useAnimation();
  const tabContainerControls = useAnimation();
  const { darkTheme, toggleTheme } = useTheme();
  const tabsContainerRef = useRef(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const observerRef = useRef(null);
  const tabsRef = useRef([]);

  const updateTabsInView = (index, isInView) => {
    setTabsInView((prev) => {
      const newTabsInView = [...prev];
      newTabsInView[index] = isInView;
      return newTabsInView;
    });
  };

  const isTabInView = (tabElement) => {
    if (!tabElement) return false;
    const tabRect = tabElement.getBoundingClientRect();
    return (
      tabRect.top >= 0 &&
      tabRect.left >= 0 &&
      tabRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      tabRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const changeTab = (index) => {
    const tabElement = tabsRef.current[index];
    if (tabElement && !isTabInView(tabElement)) {
      tabElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveTabIndex(index); // Always update the active tab index
  };


  useEffect(() => {
    // Update to manage refs more dynamically
    tabsRef.current = tabsRef.current.slice(0, tabs.length);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const index = tabsRef.current.findIndex((tab) => tab === entry.target);
        if (index !== -1) {
          updateTabsInView(index, entry.isIntersecting);
        }
        if (entry.isIntersecting) {
          setActiveTabIndex(index);
          if (index === tabs.length) {
            observer.unobserve(entry.target); // Stop observing the last tab to allow scrolling past it
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    tabsRef.current.forEach((tab, index) => {
      if (tab) observerRef.current.observe(tab);
    });

    return () => {
      // Cleanup observer with safeguard for unobserving
      tabsRef.current.forEach((tab) => {
        if (tab) observerRef.current.unobserve(tab);
      });
    };
  }, [tabs.length, tabContainerControls, sidenavControls]);

  return (
    <>
      {/* Left Sidebar */}
      <div className="flex flex-row h-[700px]  overflow-hidden" id='container'>
        <motion.div
          className={`flex w-fit items-center justify-center bg-transparent border-r-2`}
          id="sidenav"
          animate={sidenavControls}
        >
          <div
            ref={tabsContainerRef}
            className="grid-rows-5 items-center lg:grid"
          >
            {tabs.slice(0, 6).map((tab, index) => (
              <button
                key={index}
                className={`my-2 w-64 whitespace-nowrap rounded-l-md pl-4 py-3 text-left font-medium lg:my-3 cursor-default ${
                  index === activeTabIndex
                    ? "bg-primary text-white"
                    : "bg-white text-[#424B66]"
                }`}
                id={`tab-btn-${tab.id}`}
              >
                {tab.title}
              </button>
            ))}
            <div className="py-8">
              <Link
                href={"/platform"}
                className="justify-left pl-4 flex items-center text-[18px] text-primary hover:text-[#0368B1]"
              >
                Explore more <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="relative col-span-3 rounded-b"
          animate={tabContainerControls}
        >
          <div
            className={`scrollArea rounded-lg transition-all`}
            style={{
              overflowY: "auto",
              height: "100vh",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {tabs.map((tab, index) => (
              <div
                key={index}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`tab-content rounded-xl my-6 py-4 ${
                  index === activeTabIndex ? "active" : ""
                }`}
                data-index={tab.id}
              >
                <Tab
                  {...tab}
                  darkTheme={darkTheme}
                  index={index}
                  inView={tabsInView[index]}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DesktopTabs;
