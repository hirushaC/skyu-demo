import Base from "@layouts/Baseof";
import CaseStudies from "@layouts/components/CaseStudies";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import SkeletonImage from "@layouts/components/SkeletonImage";
import { getListPage } from "@lib/contentParser";
import Link from "next/link";
import React from "react";

const Developers = ({ developers, casestudies }) => {
  return (
    <Base>
      <>
        <section className="animate section grid h-screen place-items-center bg-[#0368B1]">
          <div className="container">
            <div className="relative">
              <div className="justify-left grid place-items-center text-center">
                <h1 className="text-white">
                  SkyU For{" "}
                  <span className="text-[#11172C]">{developers.title}</span>
                </h1>
                <p className="mx-3 py-3 text-light sm:text-[18px]">
                  {developers.subtitle}
                </p>
                <div className="mt-6 font-medium">
                  <Link className="btn btn-secondary px-8" href="/contact">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-theme-light ">
          <div className="container">
            <div className="animate relative text-center">
              <h3 className="font-normal">
                Deliver excellent digital experiences.
                <br />
                <span className="font-normal">
                  Golden paths for you to
                  <span className="font-medium text-primary">
                    {" "}
                    work autonomously
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-primary">
                    focus on the application
                  </span>{" "}
                  instead of underlying infrastructure.
                </span>
              </h3>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="animate relative">
              <div className={`mx-auto`}>
                {developers.details.map((card, index) => (
                  <div
                    className={`sm:mx-5 cursor-default overflow-hidden bg-white`}
                    key={index}
                  >
                    <div className="relative z-10 mx-auto">
                      <div
                        className={`text-base leading-7 text-gray-600 transition-all duration-300`}
                      >
                        <div className="mb-10 flex flex-col gap-6 lg:mx-8">
                          <p className={`text-center sm:text-left`}>
                            {card.title}
                          </p>
                          <div className="ml-10">
                            <ul className="list-disc font-medium">
                              {card.facts.map((fact, j) => (
                                <li key={`${index}-${j}`}>{fact.text}</li>
                              ))}
                            </ul>
                          </div>

                          <p className={`text-center sm:text-left`}>
                            {card.paragraph}:
                          </p>
                        </div>

                        <div className="grid auto-rows-auto gap-10">
                          {card.section.map((subCard, subIndex) => (
                            <div
                              key={subIndex}
                              className="grid grid-cols-1 place-items-center lg:grid-cols-2"
                            >
                              <div
                                className={`${
                                  subIndex % 2 === 0 && `sm:order-1`
                                }`}
                              >
                                <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                                  <ImageFallback
                                    src={subCard.imageSrc}
                                    width={600}
                                    height={600}
                                    alt="image"
                                    className="rounded-lg"
                                  />
                                </div>
                              </div>
                              <div className="m-3 px-4 py-10">
                                <div className="flex gap-3">
                                  <h4 className="py-3 font-medium">
                                    {subCard.subtitle}
                                  </h4>
                                </div>
                                <p className="text-sm leading-6">
                                  {subCard.content}
                                </p>
                                {subCard.points && (
                                  <div className="my-5 flex flex-col">
                                    {subCard.points.map((point, i) => (
                                      <React.Fragment key={`${subIndex}-${i}`}>
                                        <div
                                          className={`flex flex-row items-start ${subCard.style}`}
                                        >
                                          <div className="mt-1 flex-none">
                                            <ImageFallback
                                              src={"/icons/tick_check.svg"}
                                              width={16}
                                              height={16}
                                              alt="tick"
                                            />
                                          </div>

                                          <p
                                            className={`flex-grow text-sm leading-6`}
                                          >
                                            <span className="font-medium">
                                              {point.title}
                                            </span>{" "}
                                            {point.desc}
                                          </p>
                                        </div>
                                      </React.Fragment>
                                    ))}
                                  </div>
                                )}
                                <p className="text-sm">{subCard.para}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-theme-light">
          <div className="container">
            <div className="relative text-center">
              <p className="text-[18px]">{developers.ssubtitle}</p>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                  <ImageFallback
                    className="rounded-md shadow-2xl shadow-[#B9DFFB]"
                    src="/images/solutions_tab/image1.svg"
                    width={800}
                    height={800}
                    alt={developers.stitle}
                  />
                  {/* <SkeletonImage /> */}
                </div>
                <div className="flex flex-col items-center justify-center text-left sm:items-start sm:mx-0 mx-5">
                  <h6 className="my-5 text-center font-medium leading-6 sm:text-left">
                    {developers.paragraph}
                  </h6>
                  <ul className="mx-5 list-disc text-sm">
                    {developers.addons &&
                      developers.addons.map((item, index) => (
                        <li key={index}>{item.title}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-theme-light">
          <div className="container">
            <div className="relative mx-5">
              <h2 className="mb-10 text-center">
                A platform <span className="text-primary">by developers</span>{" "}
                for developers.
              </h2>
              <div className="grid gap-10 sm:grid-cols-2">
                {developers.changes.map((item, index) => (
                  <div key={index}>
                    <h4 className="py-5 text-center sm:text-left">{item.title}</h4>
                    <ul className="list-disc text-sm">
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

        <section className={`animate section`}>
          <CaseStudies casestudies={casestudies} />
        </section>

        <section className="section bg-theme-light">
          <div className="container">
            <div className="relative">
              <Cta />
            </div>
          </div>
        </section>
      </>
    </Base>
  );
};

export default Developers;

export const getStaticProps = async () => {
  const solutions = await getListPage("content/solutions.md");
  const { frontmatter } = solutions;
  const { developers, casestudies } = frontmatter;

  return {
    props: {
      developers: developers,
      casestudies: casestudies,
    },
  };
};
