import Link from "next/link";
import React, { createRef, useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTheme } from "./ThemeContext";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import SkeletonImage from "./components/SkeletonImage";
import Post from "./partials/Post";
import Animation2 from "./components/platform/animation2";
import { motion } from "framer-motion";

const Platform = ({ data, posts }) => {
  const { frontmatter } = data;
  const { images, intro, access, outro, blogs, features } = frontmatter;
  const { darkTheme } = useTheme();
  const sectionRefs = useRef(features.list.map(() => createRef()));
  const [scrollToIndex, setScrollToIndex] = useState(null);
  const containerRef = useRef(null);
  const [isHoverSectionFixed, setIsHoverSectionFixed] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const hoverSectionRef = useRef(null);
  const sentinelRef = useRef(null);
  let lastScrollY = useRef(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      const isScrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY; // Update last scroll position

      entries.forEach((entry) => {
        if (
          entry.target === sentinelRef.current &&
          !entry.isIntersecting &&
          isScrollingDown
        ) {
          // Make sticky only if scrolling down and sentinel is not intersecting
          setIsHoverSectionFixed(true);
        } else if (entry.isIntersecting && !isScrollingDown) {
          // Revert to static if scrolling up and sentinel starts intersecting
          setIsHoverSectionFixed(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollToIndex !== null) {
      const selectedRow = containerRef.current?.children[scrollToIndex];
      if (selectedRow) {
        selectedRow.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Element to scroll to does not exist:", scrollToIndex);
      }
    }
  }, [scrollToIndex]);

  const handleFeatureTitleClick = (index) => {
    const sectionRef = sectionRefs.current[index];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOnClick = (i) => {
    setShow(!show);
  };

  const upDownAnimation = {
    y: ["40%", "0%", "40%"],
    x: ["100%", "0%", "200%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
        ease: "easeInOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Hero section */}
      <section
        className={`section flex h-screen items-center justify-center bg-[#0368B1]`}
      >
        <div className="container-xl z-10">
          <div className="relative text-center">
            <div className="mx-5 py-20 lg:mx-40">
              <h1 className="lg:h1 h2 text-white">
                Soar through releases with{" "}
                <span className="text-[#B9DFFB]">
                  clear <br className="hidden lg:block" />
                  ownership
                </span>{" "}
                and a{" "}
                <span className="text-[#B9DFFB]">
                  simple <br className="hidden sm:block" /> “code-to-commit”
                  pathway
                </span>
              </h1>
              <div className="banner-btn pt-10">
                <Link className="btn btn-secondary" href={access.link.href}>
                  {access.link.label}
                </Link>
              </div>

              <p className="py-10 text-sm text-[#E2E4EB] lg:mx-10 lg:text-base">
                {intro.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* <motion.div
                className={`absolute left-10 top-4 h-96 w-96 rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-white opacity-40  blur-3xl lg:flex`}
                animate={upDownAnimation}
                initial={{ y: "0%" }}
              ></motion.div> */}
      </section>

      {/* Uppder gradient */}
      <div
        className={`${
          darkTheme &&
          "absolute left-0 hidden h-40 w-40 rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-white opacity-40 blur-3xl lg:flex"
        }`}
      ></div>

      <section
        className={`bg-theme-light py-36 ${darkTheme && "bg-[#272f47]"}`}
      >
        <div className="container">
          <div className="relative">
            <div className="grid-cols-3 lg:grid">
              <div className="mx-5 grid grid-rows-1">
                <div className="flex items-center justify-center pb-6">
                  <div>
                    <h2 className="sm:h2 h4 text-center lg:text-left">
                      Ascend to new heights{" "}
                      <span className="text-primary">with SkyU!</span>
                    </h2>

                    <p className="py-10 text-center text-base text-[#878B9E] lg:text-left">
                      {access.paragraph}
                    </p>

                    <div className="mt-5 border-l-2 border-primary pl-5">
                      <p className="pb-1 text-sm font-normal text-[#878B9E]">
                        Learn more about
                      </p>
                      <div className="text-lg font-medium text-primary hover:text-[#0368B1]">
                        <Link
                          className="justify-left flex w-full items-center gap-1"
                          href="https://docs.skyu.io/#industry-strength-integrations"
                          target="_blank"
                        >
                          Industry-strength integration
                          <IoIosArrowRoundForward />
                        </Link>
                      </div>
                      {/* <div
                        className={`absolute top-0 opacity-20 -z-50 left-0 h-52 w-52 rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-white  blur-3xl lg:flex`}
                      ></div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 hidden lg:block">
                <div className="h-full w-auto place-content-center place-self-center lg:grid">
                  <Animation2 />
                </div>
                <p className="py-5 text-center text-sm font-medium text-[#878B9E]">
                  {outro.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={sentinelRef} style={{ height: "1px" }}></div>
      {/* Hover Section */}
      <section
        ref={hoverSectionRef}
        id="hover-section"
        className={`hidden bg-primary py-6 lg:block ${
          isHoverSectionFixed
            ? "fixed left-0 top-10 z-30 w-full lg:top-20"
            : "static"
        }`}
      >
        <div>
          <div className="relative flex items-center justify-center">
            <div className="auto-cols-auto grid-flow-col lg:grid">
              {features.list.slice(0, 5).map((feature, index) => (
                <React.Fragment key={index}>
                  <p
                    className="flex cursor-pointer items-center justify-center px-5 py-1 text-center text-sm font-medium text-white"
                    onClick={() => handleFeatureTitleClick(index)}
                  >
                    {feature.title}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" ref={containerRef}>
          <div className="animate relative">
            {features.list.map((feature, index) => (
              <React.Fragment key={index}>
                <div
                  ref={sectionRefs.current[index]}
                  className="mx-5 grid place-items-center py-10 sm:mx-auto sm:grid-cols-2 sm:py-14 md:py-20 lg:py-24"
                  key={index}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-0" : "lg:order-1"
                    }`}
                  >
                    <h2 className="py-4 text-center sm:text-left">
                      {feature.title}
                    </h2>
                    {/* <p>{feature.content}</p> */}

                    <React.Fragment>
                      {feature.content.length > 1 ? (
                        <div className="grid auto-cols-auto auto-rows-auto">
                          <div className="flex flex-row flex-wrap justify-center gap-3 sm:justify-start">
                            {feature.content.map((item, index) => (
                              <button
                                key={index}
                                className={`rounded-lg p-3 text-sm sm:text-base ${
                                  index === selectedTab
                                    ? "bg-primary text-white"
                                    : "bg-theme-light text-gray-600"
                                }`}
                                onClick={() => handleTabClick(index)}
                              >
                                {item.title}
                              </button>
                            ))}
                          </div>
                          <p className="mt-5 text-center sm:h-28 sm:text-left">
                            {feature.content[selectedTab]?.subtitle}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="text-center sm:text-left">
                            {feature.content.map((item, index) => (
                              <p key={index}>{item.subtitle}</p>
                            ))}
                          </div>
                        </>
                      )}
                    </React.Fragment>

                    {feature.items && (
                      <>
                        <div className="mt-6">
                          <hr />
                        </div>
                        <div className="mt-9 border-l-2 border-primary pl-5">
                          <p className="pb-1 font-normal text-[#878B9E]">
                            Learn more about
                          </p>
                          <div className="divide-x-2 font-medium">
                            {feature.items.map((btn, i) => (
                              <div
                                key={i}
                                className={`inline-block py-1 pr-5 ${
                                  i % 2 !== 0 && "pl-5"
                                }`}
                              >
                                <Link
                                  className="justify-left flex w-full items-center gap-1"
                                  href={btn.link}
                                  target="_blank"
                                >
                                  {btn.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className={`mt-10`}>
                    <ImageFallback
                      className={`mx-auto`}
                      src={feature.thumbnail}
                      width={500}
                      height={511}
                      alt={`feature-${index}`}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Feature content row */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section ${
          !darkTheme ? "bg-theme-light" : "bg-[#272f47]"
        } flex items-center justify-center`}
      >
        <div className="container-xl">
          <div className="relative text-center">
            <div className="lg:mx-40">
              <h2>{blogs.title}</h2>
            </div>
            {posts.length > 0 ? (
              <div className="row grid justify-center text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts?.slice(0, 3).map((post, index) => (
                  <div key={"post-" + index} className="mt-16">
                    <Post post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <section className="pt-28">
                <div className="container">
                  <div className="relative">
                    <div className="grid grid-cols-1 items-center justify-center gap-y-5 text-center">
                      <div className="mx-auto">
                        <ImageFallback
                          src={"/images/just-logo.svg"}
                          width={400}
                          height={100}
                          alt="image"
                        />
                      </div>
                      <h4>
                        Stay <a className="text-primary">Tuned...</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <section
        className={`section ${!darkTheme ? "bg-white" : "bg-[#272f47]"}`}
      >
        <div className="container text-center">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section>
    </>
  );
};

export default Platform;
