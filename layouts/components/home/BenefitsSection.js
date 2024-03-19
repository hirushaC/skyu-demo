import { BentoGrid, BentoGridItem } from "../BentoGrid";

const BenefitsSection = ({ benefits }) => {
  return (
    <>
      <div className={`mb-7 text-left`}>
      <h2 className={`sm:text-left text-center sm:h2 h4`}>
          <span className="text-primary">The benefits of SkyU </span><br className="sm:hidden block"/>as a
          platform
        </h2>
      </div>

      <div className="row pt-11">
        <BentoGrid>
          {benefits.list.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.subtitle}
              icon={item.icon}
              index={i}
              // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
};

export default BenefitsSection;
