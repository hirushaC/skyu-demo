import Base from "@layouts/Baseof";
import CaseStudies from "@layouts/components/CaseStudies";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import SkeletonImage from "@layouts/components/SkeletonImage";
import { getListPage } from "@lib/contentParser";
import Link from "next/link";
import React from "react";

const CSuite = ({ c_suite, casestudies }) => {
  return (
    <Base>
      <>
        <section className="animate section grid h-screen place-items-center bg-[#0368B1]">
          <div className="container">
            <div className="relative">
              <div className="justify-left grid place-items-center text-center">
                <h1 className="text-white">
                  SkyU For{" "}
                  <span className="text-[#11172C]">{c_suite.title}</span>
                </h1>
                <p className="py-3 text-light sm:text-[18px]">
                  {c_suite.subtitle}
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

        <section className="section bg-theme-light">
          <div className="container">
            <div className="animate relative sm:mx-20 flex flex-col gap-5 text-center">
              <h3 className="font-medium">
                Take care of your developers and Ops
                <span className="leading-none">
                  Migrate to the cloud, look after your clusters in K8s and{" "}
                  <span className="font-medium text-primary">
                    deploy in private with ease.
                  </span>
                </span>
              </h3>
              {/* <p className={`text-center`}>
                Modern enterprises are changing. Today, the C-suite faces an
                ever-expanding array of challenges and opportunities. As the
                driving force behind digital transformation, you are tasked with
                steering your organization towards success in increasingly
                competitive environments. In this journey, one powerful ally
                that may not yet be on your radar is a DevOps automation
                platform.
              </p> */}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="animate relative">
              <div className={`mx-auto`}>
                <div
                  className={`sm:mx-5 cursor-default overflow-hidden bg-white`}
                >
                  <div className="relative z-10 mx-auto">
                    <div
                      className={`text-base leading-7 text-gray-600 transition-all duration-300`}
                    >
                      <div className="flex flex-col gap-6 lg:mx-8">
                        <p className={`mb-10 text-center sm:text-left`}>
                          Modern enterprises are changing. Today, the C-suite
                          faces an ever-expanding array of challenges and
                          opportunities. As the driving force behind digital
                          transformation, you are tasked with steering your
                          organization towards success in increasingly
                          competitive environments. In this journey, one
                          powerful ally that may not yet be on your radar is a
                          DevOps automation platform.
                        </p>
                      </div>
                      <div className="grid auto-rows-auto gap-10">
                        {/* First card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-1`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/cSuite/image1.jpg"
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
                                Your time matters. And so do your development
                                teams.
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              Software development operations face numerous
                              challenges that can hinder efficiency and
                              innovation. <br />
                              <br />
                              According to a recent survey by GitLab, nearly 68%
                              of developers report that inefficient development
                              processes slow down their ability to deliver code,
                              while 57% cite a lack of collaboration between
                              teams as a significant obstacle. Tools like SkyU
                              are needed to drive productivity, collaboration,
                              and innovation. With an DevOps automation platform
                              like SkyU, you can streamline development
                              operations in ways you may not have thought
                              possible.
                              <br />
                              <br />
                              Consider these benefits:
                            </p>
                            <div className="my-5 flex flex-col">
                              {c_suite.points1.map((point, i) => (
                                <React.Fragment key={`${i}`}>
                                  <div
                                    className={`flex flex-row items-start gap-2 px-5 py-2`}
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
                                      </span>
                                      {point.desc}
                                    </p>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                            {/* <p className="text-sm">{subCard.para}</p> */}
                          </div>
                        </div>

                        {/* Second card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-0`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/cSuite/image2.jpg"
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
                                Innovation is the lifeblood of your
                                organisation. But nurturing it requires more
                                than just lip service.
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              Collaboration among platform teams, operations
                              (Ops), DevOps engineers, and developers is
                              essential for delivering customer-facing
                              applications and driving revenue. DevOps
                              practices, when implemented effectively, can lead
                              to a 30 times higher deployment frequency and a 60
                              times lower change failure rate, as reported by
                              the State of DevOps report. You must foster a
                              culture of collaboration and provide the necessary
                              resources and support to maximize the value
                              delivered to customers and the organization.
                              <br />
                              <br />
                              How SkyU breaks down silos in cross-functional
                              collaboration:
                            </p>
                            <div className="my-5 flex flex-col">
                              {c_suite.points2.map((point, i) => (
                                <React.Fragment key={`${i}`}>
                                  <div
                                    className={`flex flex-row items-start gap-2 px-5 py-2`}
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
                                      </span>
                                      {point.desc}
                                    </p>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                            {/* <p className="text-sm">{subCard.para}</p> */}
                          </div>
                        </div>

                        {/* Third Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-1`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/cSuite/image3.jpg"
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
                                What about Data?
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              As leaders, you understand the importance of
                              data-driven decision-making. However, accessing
                              and interpreting relevant data can be challenging.
                              With SkyU, you gain access to actionable insights
                              that empower informed decision-making:
                            </p>
                            <div className="my-5 flex flex-col">
                              {c_suite.points3I.map((point, i) => (
                                <React.Fragment key={`${i}`}>
                                  <div
                                    className={`flex flex-row items-start gap-2 px-5 py-2`}
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
                                      </span>
                                      {point.desc}
                                    </p>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                            <p className="text-sm">
                              And tools to nurture creativity and
                              experimentation inside your teams.
                            </p>
                            <div className="my-5 flex flex-col">
                              {c_suite.points3II.map((point, i) => (
                                <React.Fragment key={`${i}`}>
                                  <div
                                    className={`flex flex-row items-start gap-2 px-5 py-2`}
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
                                      </span>
                                      {point.desc}
                                    </p>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Fourth Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-0`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/cSuite/image4.jpg"
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
                                Compliance and Security is a non-negotiable,
                                obviously.
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              You are dealing with a world of heightened data
                              privacy concerns and regulatory scrutiny. The
                              executive team does not need that added stress.
                              SkyU offers robust security features and
                              compliance controls to safeguard your
                              organization&apos;s assets:
                            </p>
                            <div className="my-5 flex flex-col">
                              {c_suite.points4.map((point, i) => (
                                <React.Fragment key={`${i}`}>
                                  <div
                                    className={`flex flex-row items-start gap-2 px-5 py-2`}
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
                                      </span>
                                      {point.desc}
                                    </p>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-theme-light">
          <div className="container">
            <div className="relative">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-center mb-10">Clear ownership. Efficient.<br/> Faster delivery to achieve business goals.</h3>
                <ImageFallback
                  src="/images/solutions_tab/image1.svg"
                  width={600}
                  height={600}
                  alt="image"
                  className="rounded-lg"
                />
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

export default CSuite;

export const getStaticProps = async () => {
  const solutions = await getListPage("content/solutions.md");
  const { frontmatter } = solutions;
  const { c_suite, casestudies } = frontmatter;

  return {
    props: {
      c_suite: c_suite,
      casestudies: casestudies,
    },
  };
};
