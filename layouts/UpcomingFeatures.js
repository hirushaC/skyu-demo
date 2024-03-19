import React from "react";
import ImageFallback from "./components/ImageFallback";
import Base from "./Baseof";
import { markdownify } from "@lib/utils/textConverter";
import Cta from "./components/Cta";
import { useTheme } from "./ThemeContext";
import SkeletonImage from "./components/SkeletonImage";

const UpcomingFeatures = ({ data }) => {
  const { frontmatter } = data;
  const { speciality } = frontmatter;

  const { darkTheme } = useTheme();

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="relative">
            <div className="text-center">
              <p className="text-[#878B9E]">
                We update our platform often, these are our
              </p>
              <h1>Upcoming Features</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="section">
        <div className="container-xl">
          <div className="relative">
            <div className="lg:grid grid-cols-3 place-items-center">
              <ImageFallback src='/images/upcomingf-image.svg' width={500} height={500} alt='image'/>
              <div className="lg:grid grid-cols-2 col-span-2 px-5">
                {" "}
                {speciality.map((item, index) => (
                  <div
                    className={`m-5 mx-10 lg:py-0 py-10`}
                    key={index}
                  >
                    <div className="animate">
                      <ImageFallback src={item.image} width={60} height={60} alt={item.title}/>
                      <h4 className={`my-4`}>
                        {item.title}
                      </h4>
                      {markdownify(
                        item.description,
                        "p",
                        "text-[#878B9E]"
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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

export default UpcomingFeatures;
