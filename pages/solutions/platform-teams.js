import Base from "@layouts/Baseof";
import CaseStudies from "@layouts/components/CaseStudies";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import SkeletonImage from "@layouts/components/SkeletonImage";
import { getListPage } from "@lib/contentParser";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PlatformTeams = ({ platform_teams, casestudies }) => {
  const cardRef = useRef(null);
  const pageRef = useRef(null);

  const handlePrevPagClick = () => {
    if (pageRef.current) {
      pageRef.current.slidePrev();
    }
  };

  const handleNextPagClick = () => {
    if (pageRef.current) {
      pageRef.current.slideNext();
    }
  };

  const handleSwiperPagInit = (swiper) => {
    pageRef.current = swiper;
  };

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Base>
      <>
        <section className="animate section grid h-screen place-items-center bg-[#0368B1] lg:py-40">
          <div className="container">
            <div className="relative">
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="mx-3 text-white">
                  SkyU For{" "}
                  <span className="text-[#B9DFFB]">{platform_teams.title}</span>
                </h1>
                <p className="py-3 text-light sm:text-[18px]">
                  {platform_teams.subtitle}
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
            <div className="animate relative text-center">
              <h3 className="font-normal">
                <span className="leading-none">
                  Top performing organizations{" "}
                  <span className="font-medium text-primary">
                    don&apos;t build from scratch.{" "}
                  </span>
                  <br />
                  They use a hybrid vendor toolchain{" "}
                  <span className="font-medium text-primary">
                    that just works.
                  </span>
                </span>
              </h3>
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
                          Platform and infrastructure teams are pivotal in
                          providing the foundational infrastructure and tools
                          for effective application development, deployment, and
                          scaling. Internal developer platforms empower these
                          teams to streamline operations, enhance scalability,
                          and drive organizational success.
                        </p>
                      </div>
                      <div className="grid auto-rows-auto gap-10">
                        {/* First card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-0`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/platformTeams/image1.jpg"
                                width={500}
                                height={500}
                                alt="image 1"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Streamlining Infrastructure Management
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              Internal developer platforms simplify
                              infrastructure management by offering centralized
                              tools and automation capabilities. They enable
                              platform teams to efficiently provision,
                              configure, and manage infrastructure resources,
                              reducing manual overhead and streamlining
                              operations.
                            </p>
                          </div>
                        </div>

                        {/* Second Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-1`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/platformTeams/image2.jpg"
                                width={500}
                                height={500}
                                alt="image 2"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Standardizing Development Environments
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              Internal developer platforms provide standardized
                              development environments across development,
                              testing, and production. This ensures consistency
                              and repeatability, with platform teams enforcing
                              infrastructure-as-code practices for reliable
                              environments throughout the software development
                              lifecycle.
                            </p>
                          </div>
                        </div>

                        {/* Third Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-0`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/platformTeams/image3.jpg"
                                width={500}
                                height={500}
                                alt="image 3"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Enhancing Scalability and Resilience
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              In modern cloud-native architectures, scalability
                              and resilience are critical. Internal developer
                              platforms offer auto-scaling, load balancing, and
                              fault tolerance tools, enabling platform teams to
                              design and manage highly scalable and resilient
                              infrastructure solutions.
                            </p>
                          </div>
                        </div>

                        {/* Fourth Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-1`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/platformTeams/image4.jpg"
                                width={500}
                                height={500}
                                alt="image 4"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Facilitating Self-Service Provisioning
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              Internal developer platforms empower development
                              teams with self-service capabilities for
                              provisioning and managing infrastructure
                              resources. APIs, templates, and pre-configured
                              environments provided by platform teams enable
                              independent deployment of applications,
                              accelerating time-to-market.
                            </p>
                          </div>
                        </div>

                        {/* Fifth Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-0`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/platformTeams/image5.jpg"
                                width={500}
                                height={500}
                                alt="image 5"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Enabling Continuous Integration and Deployment
                                (CI/CD)
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              CI/CD pipelines automate the software delivery
                              process and foster a culture of continuous
                              integration and deployment. Internal developer
                              platforms seamlessly integrate CI/CD capabilities
                              with infrastructure management tools, automating
                              testing, build, and deployment processes for
                              frequent and reliable software updates.
                            </p>
                          </div>
                        </div>

                        {/* Sixth Card */}
                        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
                          <div className={`sm:order-1`}>
                            <div className="rounded-xl bg-white bg-opacity-40 sm:p-10">
                              <ImageFallback
                                src="/images/solutions_tab/platformTeams/image6.jpg"
                                width={500}
                                height={500}
                                alt="image 6"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="m-3 px-4 py-10">
                            <div className="flex gap-3">
                              <h4 className="py-3 font-medium">
                                Promoting Collaboration and Knowledge Sharing
                              </h4>
                            </div>
                            <p className="text-sm leading-6">
                              Collaboration and knowledge sharing are vital for
                              platform and infrastructure teams. Internal
                              developer platforms facilitate collaboration
                              through shared documentation, code repositories,
                              and communication channels. They empower teams to
                              share best practices, troubleshoot issues, and
                              collaborate effectively on infrastructure
                              projects.
                            </p>
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
            <div className="animate relative text-center">
              <h3 className="font-medium">{platform_teams.fsubtitle}</h3>
              <div className="row">
                <div className="row mx-auto flex items-center justify-center pt-11">
                  {domLoaded && (
                    <Swiper
                      slidesPerView={1}
                      navigation={{
                        nextEl: ".pagination-button-next",
                        prevEl: ".pagination-button-prev",
                      }}
                      onInit={handleSwiperPagInit}
                      onNavigationNext={handleNextPagClick}
                      onNavigationPrev={handlePrevPagClick}
                      pagination={{
                        type: "bullets",
                        clickable: true,
                        dynamicBullets: false,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.pagination.el = cardRef.current;
                      }}
                      modules={[Pagination]}
                      breakpoints={{
                        768: {
                          slidesPerView: 1,
                        },
                        992: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {platform_teams.list.map((item, index) => (
                        <SwiperSlide
                          key={"benefits-" + index}
                          className="flex items-center justify-center"
                        >
                          <div
                            className={`feature-card items-center justify-center rounded-md bg-white bg-opacity-90 px-7 py-16 text-center ring-blue-900/5 backdrop-blur-xl backdrop-sepia-0 backdrop-filter transition-all duration-300 hover:-translate-y-1 hover:border-b hover:border-b-primary hover:shadow-[#E8F4FE] lg:m-4 h-[400px] lg:text-left lg:ring-1`}
                          >
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-md">
                              <ImageFallback
                                className="banner-img block items-center justify-center rounded-lg p-2"
                                src={item.icon}
                                width={80}
                                height={80}
                                priority={true}
                                alt={item.title}
                              />
                            </div>

                            <div className="items-center justify-center rounded-md">
                              <h4 className="mb-5">{item.title}</h4>
                            </div>
                            <p className="text-slate-500 sm:text-[17px]">
                              {item.subtitle}
                            </p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div
                    className="card-button-next hidden bg-white text-primary shadow-lg hover:shadow-none lg:flex"
                    onClick={() => handleNextPagClick()}
                  >
                    <TfiAngleRight />
                  </div>
                  <div
                    className="card-button-prev hidden bg-white text-primary shadow-lg hover:shadow-none lg:flex"
                    onClick={() => handlePrevPagClick()}
                  >
                    <TfiAngleLeft />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-theme-light">
          <div className="container">
            <div className="relative text-center">
              {platform_teams.stitle && <h1>{platform_teams.stitle}</h1>}
              <p className="text-[18px]">{platform_teams.ssubtitle}</p>
              <div className="grid grid-cols-1 sm:gap-10 lg:grid-cols-3">
                <div className="col-span-2 flex items-center justify-center py-20">
                  <ImageFallback
                    className="rounded-md"
                    src="/images/workflow.svg"
                    width={900}
                    height={900}
                    alt={platform_teams.stitle}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h6 className="text-center font-normal leading-6 sm:text-left">
                    {platform_teams.paragraph}
                  </h6>
                  <ul className="sm:mx-5 list-disc pt-5 sm:items-start text-left">
                    {platform_teams.addons &&
                      platform_teams.addons.map((item, index) => (
                        <li key={index}>{item.title}</li>
                      ))}
                  </ul>
                </div>
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

export default PlatformTeams;

export const getStaticProps = async () => {
  const solutions = await getListPage("content/solutions.md");
  const { frontmatter } = solutions;
  const { platform_teams, casestudies } = frontmatter;

  return {
    props: {
      platform_teams: platform_teams,
      casestudies: casestudies,
    },
  };
};
