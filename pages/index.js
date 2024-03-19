import Base from "@layouts/Baseof";
import CaseStudies from "@layouts/components/CaseStudies";
import Cta from "@layouts/components/Cta";
import BenefitsSection from "@layouts/components/home/BenefitsSection";
import FeaturesSection from "@layouts/components/home/FeaturesSection";
import HeroSection from "@layouts/components/home/HeroSection";
import LogoBannerSection from "@layouts/components/home/LogoBannerSection";
import StakeholderSection from "@layouts/components/home/StakeholderSection";
import SupportSection from "@layouts/components/home/SupportSection";
import ToggleSection from "@layouts/components/home/ToggleSection";
import ToolChainSection from "@layouts/components/home/ToolChainSection";
import WorkflowSection from "@layouts/components/home/WorkflowSection";
import { getListPage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import { useEffect } from "react";

const Home = ({
  banner,
  brands,
  features,
  bottlenecks,
  intro,
  benefits,
  casestudies,
  stats,
  speciality,
}) => {


  return (
    <Base description="test site" image={"/images/logo.svg"}>
      {/* Hero section */}
      <section className={`banner bg-[#0368B1] pt-0`}>
        <div className="container pb-10">
          <div className="relative">
            <HeroSection banner={banner} stats={stats} />
          </div>
        </div>
      </section>

      {/* Shape divider */}
      <div className="custom-shape-divider-bottom-1704351520 relative -mt-2 bg-white bg-dot-pattern bg-[length:20px_20px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <rect width="20" height="20" fill="#0368B1"></rect>
              {/* <circle cx="10" cy="10" r="1" fill="rgba(0, 0, 0, 0.3)" /> */}
            </pattern>
          </defs>

          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="url(#dotPattern)"
          ></path>
        </svg>
      </div>

      {/* Workflow section */}
      <section
        className={`section bg-white bg-dot-pattern bg-[length:20px_20px]`}
      >
        <div className="container">
          <div className="relative">
            <WorkflowSection />
          </div>
        </div>
      </section>

      {/* Support section I */}
      <section className={`section bg-theme-light`}>
        <div className="container">
          <div className="relative">
            <SupportSection bottlenecks={bottlenecks} />
          </div>
        </div>
      </section>

      {/* Support section II */}
      <section className="section bg-white">
        <div className="container">
          <div className="relative">
            <ToggleSection intro={intro} />
          </div>
        </div>
      </section>

      {/* Stakeholder Section */}
      <section className="section bg-theme-light">
        <div className="container-xl">
          <div className="relative">
            <StakeholderSection intro={intro} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section bg-white`}>
        <div className="container-xl text-center">
          <div className="relative">
            <FeaturesSection features={features} />
          </div>
        </div>
      </section>

      {/* Benefits Section*/}
      <section className={`section bg-theme-light`}>
        <div className="container">
          <div className="relative mx-4">
            <BenefitsSection benefits={benefits} />
          </div>
        </div>
      </section>

      {/* Techstack banner Section */}
      <section className={`section`}>
        <div className="container">
          <div className="relative">
            <LogoBannerSection brands={brands} />
          </div>
        </div>
      </section>

      {/* Toolchain Section */}
      <section className={`section bg-theme-light`}>
        <div className="container">
          <div className="relative">
            <ToolChainSection speciality={speciality} />
          </div>
        </div>
      </section>

      {/* Resource Section */}
      <section className={`section`}>
        <CaseStudies casestudies={casestudies} />
      </section>

      {/* Cta */}
      <section className="section bg-theme-light">
        <div className="container text-center">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const {
    banner,
    brands,
    features,
    bottlenecks,
    intro,
    benefits,
    casestudies,
    stats,
    speciality,
  } = frontmatter;

  return {
    props: {
      banner: banner,
      brands: brands,
      features: features,
      bottlenecks: bottlenecks,
      intro: intro,
      benefits: benefits,
      casestudies: casestudies,
      stats: stats,
      speciality: speciality,
    },
  };
};
