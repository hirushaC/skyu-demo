import Base from "@layouts/Baseof";
import CaseStudies from "@layouts/components/CaseStudies";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import SkeletonImage from "@layouts/components/SkeletonImage";
import { getListPage } from "@lib/contentParser";
import Link from "next/link";
import React from "react";

const OpsTeam = ({ ops_teams, casestudies }) => {
  return (
    <Base>
      <>
        <section className="animate section grid h-screen place-items-center bg-[#0368B1]">
          <div className="container">
            <div className="relative">
              <div className="justify-left grid place-items-center text-center">
                <h1 className="text-white">
                  SkyU For{" "}
                  <span className="text-[#11172C]">{ops_teams.title}</span>
                </h1>
                <p className="py-3 text-light sm:text-[18px]">
                  {ops_teams.subtitle}
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
              <h3 className="font-normal">
                No more awkward tooling, processes and environments. <br /> The
                future is{" "}
                <span className="font-medium text-primary">
                  platform-as-a-product
                </span>{" "}
                and clear guidance on where teams should interact.
              </h3>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="animate relative">
              <div className={`mx-auto`}>
                <div
                  className={`sm:mx-5  cursor-default overflow-hidden bg-white`}
                >
                  <div className="relative z-10 mx-auto">
                    <div
                      className={`text-base leading-7 text-gray-600 transition-all duration-300`}
                    >
                      <div className="flex flex-col gap-6 lg:mx-8">
                        <p className={`mb-10 text-center sm:text-left`}>
                          Merely providing developers with the ability to
                          provision infrastructure is a necessary step, but it’s
                          not sufficient. The goal must be to fully enable those
                          teams to independently ship value to their users. SkyU
                          serves as a game-changer for Ops teams, offering a
                          suite of tools and capabilities to streamline
                          operations and support development workflows.
                        </p>
                      </div>
                      <div className="grid auto-rows-auto gap-10">
                        {/* First card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-1`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/opsTeams/image1.jpg"
                                width={400}
                                height={400}
                                alt="image 1"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Ops can seem hectic when stuck in manual mode
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              Ops teams still struggle with managing
                              infrastructure and supporting development
                              workflows. Ops teams grapple with manual and
                              repetitive tasks, such as provisioning and
                              managing infrastructure, maintaining system
                              reliability, and ensuring compliance with security
                              and regulatory standards. These challenges not
                              only hinder productivity but also impede the
                              organization&apos;s ability to respond swiftly to
                              market demands. <br />
                              <br />
                              According to the latest State of DevOps report,
                              high-performing organizations are 24 times more
                              likely to deploy changes on-demand when compared
                              to low performers. Automation and agility in
                              modern operations is largely relevant.
                              <br />
                              <br />
                              An Internal Developer Platform (IDP) like SkyU
                              offers a compelling solution empowering them to
                              focus on strategic initiatives and drive business
                              agility in today&apos;s fast-paced digital
                              landscape.
                            </p>
                            <div className="my-5 flex flex-col">
                              {ops_teams.points1.map((point, i) => (
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

                        {/* Second Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-0`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/opsTeams/image2.jpg"
                                width={400}
                                height={400}
                                alt="image 2"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Hitting your success numbers now a few clicks
                                away
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              According to Puppet&apos;s survey, a staggering
                              63% of Ops teams still rely heavily on manual
                              intervention, leading to inefficiencies and
                              increased risk of errors. Additionally, the State
                              of DevOps report underscores the importance of
                              agility and automation, with high-performing
                              organizations being 24 times more likely to deploy
                              changes on-demand. <br />
                              <br />
                              SkyU empowers Ops teams with the tools and
                              resources they need to overcome operational
                              challenges and drive business success. With SkyU,
                              you can achieve key performance indicators (KPIs)
                              like uptime percentage, mean time to resolve
                              (MTTR) incidents, and deployment frequency with
                              ease. Say goodbye to fragmented toolchains and
                              hello to a unified platform that integrates
                              seamlessly with your existing workflows.
                            </p>
                            <div className="my-5 flex flex-col">
                              {ops_teams.points2.map((point, i) => (
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
                                src="/images/solutions_tab/opsTeams/image3.jpg"
                                width={400}
                                height={400}
                                alt="image 3"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                SkyU and the compliance excellence of your
                                organisation
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              With SkyU, Ops teams can enforce security
                              policies, conduct automated compliance checks, and
                              maintain audit trails effortlessly, minimizing the
                              burden of manual compliance efforts. By providing
                              a comprehensive platform that prioritizes
                              compliance, SkyU empowers Ops teams to navigate
                              regulatory landscapes with confidence,
                              safeguarding organizational assets and reputation
                              in an ever-changing regulatory landscape.
                            </p>
                            {/* <p className="text-sm">{subCard.para}</p> */}
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

        <section className="section bg-white">
          <div className="container">
            <div className="relative text-center">
              <h4>
                By enabling DevOps automation with SkyU,
                <br /> your organization will enjoy:
              </h4>
              <p className="text-[18px]">{ops_teams.ssubtitle}</p>
              <div className="my-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {ops_teams.cards.map((card, index) => (
                  <div key={index}>
                    <div className="mx-2 flex flex-col items-center p-4 ">
                      <div className="z-10 mb-2 w-fit rounded-lg bg-blue-500 px-10 py-1">
                        <h4 className="text-white">{card.title}</h4>
                      </div>
                      <div className="-mt-8 flex h-60 w-full items-center justify-center rounded-lg border bg-white py-10 text-center text-sm text-blue-800 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-theme-light">
                        <h5 className="mx-10 font-normal leading-8">
                          {card.subtitle}
                        </h5>
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
            <div className="animate relative text-center">
              <div className="grid sm:grid-cols-2 mx-4 gap-9">
                <div className="flex flex-col items-start justify-center">
                  <div className="mb-7">
                    <h2 className="sm:text-left text-center">{ops_teams.ttitle}</h2>
                  </div>

                  <div className="flex flex-row flex-wrap sm:items-start items-center sm:justify-start justify-center gap-5">
                    {ops_teams.list.map((item, index) => (
                      <button
                        className="cursor-default rounded-md border bg-white px-3 py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-[#E8F4FE]"
                        key={index}
                      >
                        <h6 className="text-sm font-normal">{item.title}</h6>
                      </button>
                    ))}
                  </div>
                </div>
                <ImageFallback
                  src="/images/solutions_tab/opsTeams/image4.jpg"
                  width={600}
                  height={600}
                  alt="image 4"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`animate section bg-white`}>
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

export default OpsTeam;

export const getStaticProps = async () => {
  const solutions = await getListPage("content/solutions.md");
  const { frontmatter } = solutions;
  const { ops_teams, casestudies } = frontmatter;

  return {
    props: {
      ops_teams: ops_teams,
      casestudies: casestudies,
    },
  };
};
