import React from "react";
import Tabs from "../Tabs";

const FeaturesSection = ({ features }) => {
  //  Fetch data features
  const tabsData = features.list.map((feature) => ({
    title: feature.title,
    description: feature.content,
    image: feature.thumbnail,
  }));

  return (
    <>
      <section className="pt-10">
        <div className="container">
          <div className="row items-center">
            <div className={`px-12 text-center`}>
            <h2 className={`sm:h2 h4`}>
                Our internal developer platform is 
                <span className="text-primary"> designed to streamline</span> the
                daily tasks of a DevOps engineer
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container">
          <div className="row items-center">
            <Tabs tabs={tabsData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
