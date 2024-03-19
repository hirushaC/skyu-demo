import React, { useRef } from "react";
import { useTheme } from "./ThemeContext";
import ImageFallback from "./components/ImageFallback";
import Cta from "./components/Cta";
import SkeletonImage from "./components/SkeletonImage";
import Image from "next/image";
import Link from "next/link";
import CaseStudies from "./components/CaseStudies";

const SLayout = ({ data, casestudies }) => {
  const cardRef1 = useRef(null);
  const pageRef = useRef(null);
  const { darkTheme } = useTheme();

  const handlePrevPagClick1 = () => {
    if (pageRef1.current) {
      pageRef1.current.slidePrev();
    }
  };

  const handleNextPagClick1 = () => {
    if (pageRef1.current) {
      pageRef1.current.slideNext();
    }
  };

  const handleSwiperPagInit1 = (swiper) => {
    pageRef1.current = swiper;
  };

  return (
    <>
      <section className="animate section bg-white lg:py-40">
        <div className="container">
          <div className="relative">
            <div className="justify-left grid place-items-center text-center lg:grid-cols-2 ">
              <div className="mx-5 pr-14 text-left">
                <h1>
                  SkyU For <span className="text-primary">{data.title}</span>
                </h1>
                <p className="text-[18px] py-3">{data.subtitle}</p>
                <div className="mt-6 font-medium">
                      <Link className="btn btn-primary px-8" href='/contact'>
                        Learn more
                      </Link>
                    </div>
              </div>

              <div className="mt-10">
                <ImageFallback
                  src={data.simage}
                  width={800}
                  height={800}
                  alt={data.stitle}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-40 bg-theme-light">
        <div className="container">
          <div className="animate relative text-center">
            {data.title === "Platform Teams" && (
              <>
                <h2 className="font-thin">
                  {" "}
                  No more awkward tooling, processes and environments. <br />{" "}
                  The future is{" "}
                  <span className="text-primary">
                    “platform-as-a-product”
                  </span>{" "}
                  and clear guidance on where teams should interact.
                </h2>
              </>
            )}
            {data.title === "Developers" && (
              <h2 className="font-thin">
                Deliver excellent digital experiences.
                <br />
                <span className="text-[30px] font-normal">
                  Golden paths for you to
                  <span className="text-primary">
                    {" "}
                    work autonomously
                  </span> and{" "}
                  <span className="text-primary">
                    focus on the application
                  </span>{" "}
                  instead of underlying infrastructure.
                </span>
              </h2>
            )}
            {data.title === "Ops Teams" && (
              <>
                <h2 className="font-thin">
                  Operational readiness in 5...4…3…2…1.
                  <br />
                  <span className="leading-none">
                    Top performing organizations
                    <span className="text-primary">
                      {" "}
                      don’t build from scratch.
                    </span>{" "}
                    They use a hybrid open-source and vendor toolchain{" "}
                    <span className="text-primary">that just works.</span>{" "}
                  </span>
                </h2>
                <p className="pt-10">{data.fsubtitle}</p>
              </>
            )}
            {data.title === "CXOs" && (
              <>
                <h2 className="font-thin">
                  Take care of your developers and Ops
                  <br />
                  <span className="leading-none">
                    Migrate to the cloud, look after your clusters in K8s and
                    <span className="text-primary">
                      {" "}
                      deploy in private with ease.
                    </span>{" "}
                  </span>
                </h2>
              </>
            )}
          </div>
        </div>
      </section>

      {data.list && (
        <section className="section py-36">
          <div className="container">
            <div className="animate relative text-center">
            <h3 className="my-10 font-medium">{data.fsubtitle}</h3>
              <div className="row">
                {data.ttitle && <h2 className="py-5">{data.ttitle}</h2>}
                <div
                  className={`mx-auto gap-4 sm:grid sm:grid-cols-1 sm:px-4 md:grid-cols-2 md:px-8 lg:auto-cols-auto lg:px-8 xl:px-8`}
                >
                  {data.list.map((card, index) => (
                    <div
                      className={`relative m-5 cursor-default overflow-hidden shadow-[10px_10px_40px] shadow-primary/10 ${
                        darkTheme && "border border-slate-500"
                      }bg-white px-6 pb-8 pt-8 ring-1 ring-blue-900/5 transition-all duration-300 hover:-translate-y-1  hover:border-2 hover:border-r-2 hover:border-sky-500 sm:rounded-lg sm:px-10`}
                      key={"bottlenecks-" + index}
                    >
                      <div className="relative z-10 mx-auto max-w-md">
                        <div
                          className={`space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300`}
                        >
                          <div className="justify-left flex items-center">
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-md text-primary">
                              <ImageFallback
                                className="banner-img block items-center justify-center rounded-lg p-2"
                                src={card.icon}
                                width={70}
                                height={70}
                                priority={true}
                                alt={card.title}
                              />
                            </div>
                            <h5 className={`text-left`}>{card.title}</h5>
                          </div>
                          <div className="text-left">
                            {card.section ? (
                              <>
                                {card.section.map((subCard, subIndex) => (
                                  <div key={subIndex} className="p-4 my-3 rounded-xl bg-theme-light bg-opacity-30">
                                    <h6 className="font-medium py-3">{subCard.subtitle}</h6>
                                    <ul className="justify-left list-disc">
                                      {subCard.content &&
                                        subCard.content.map(
                                          (subSubCard, subSubIndex) => (
                                            <li key={subSubIndex} className="ml-5">
                                              {subSubCard.item}
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <p>{card.subtitle}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mx-10 flex items-center justify-center text-left">
                    {data.section && (
                      <div>
                        <p>{data.section.title}</p>
                        <ul className="justify-left list-disc py-6">
                          {data.addons &&
                            data.section.list.map((item, index) => (
                              <li key={index}>{item.title}</li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section bg-theme-light py-36">
        <div className="container">
          <div className="relative text-center">
            {data.stitle && <h1>{data.stitle}</h1>}
            <p className="text-[18px]">{data.ssubtitle}</p>
            <div className="lg:grid-cols-2 grid-cols-1 grid gap-10">
              <div className="flex items-center justify-center py-20">
                <ImageFallback
                className="shadow-2xl shadow-[#B9DFFB] rounded-md"
                src='/images/solutions_tab/image1.svg'
                width={800}
                height={800}
                alt={data.stitle}
              />
                {/* <SkeletonImage /> */}
              </div>
              <div className="items-left flex flex-col justify-center text-left">
                <h6 className="font-medium leading-6">{data.paragraph}</h6>
                <ul className="mx-5 list-disc pt-5">
                  {data.addons &&
                    data.addons.map((item, index) => (
                      <li key={index}>{item.title}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.title === "Developers" && data.ttitle && (
        <section className="section">
          <div className="container">
            <div className="relative mx-5">
              <h3 className="py-10">
                A platform developer <span className="text-primary">by</span>{" "}
                developers <span className="text-primary">for</span> developers.
              </h3>
              <div className="grid grid-cols-2">
                {data.changes.map((item, index) => (
                  <div key={index}>
                    <h4 className="py-5">{item.title}</h4>
                    <ul className="list-disc">
                      {item.list.map((subItem, subIndex) => (
                        <li key={`${index}-${subIndex}`}>{subItem.title}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`animate section lg:pb-40`}>
        <CaseStudies casestudies={casestudies} darkTheme={darkTheme} />
      </section>

      <section className="section bg-theme-light">
        <div className="container">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section>
    </>
  );
};

export default SLayout;
