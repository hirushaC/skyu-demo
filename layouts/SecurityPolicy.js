import Link from "next/link";
import React from "react";

const SecurityPolicy = ({ data }) => {
  const { frontmatter } = data;
  const { purpose_desc } = frontmatter;
  return (
    <>
      <section className={`section bg-[#0368B1]`}>
        <div className="container">
          <div className="relative text-center leading-9">
            <h2 className="select-none text-theme-light">
              INSIGHTURE PTE. LTD.
            </h2>
            <h3 className="select-none font-light text-theme-light">
              ISMS-IT-Policy-01 - Information Security & Service Management
              System Policy
            </h3>
            <p className="select-none font-normal text-theme-light">
              ( Issued on 07th September 2023 )
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="relative">
            <div className="mx-10 lg:mx-32">
              <div className="mb-10 text-center lg:text-left">
                <p>
                  We, Insighture believe in high-quality deliverables as well as
                  information security. Insighture will proceed with all the
                  operations under Information Security procedures to manage the
                  risks affecting the confidentiality, integrity, and
                  availability of company and customer information. We adopt the
                  highest information security practices and standards to
                  protect information in the business.
                </p>
              </div>
              <div className="my-10 text-center lg:text-left">
                <p>
                  The goal of the Insighture Information Security Program is to
                  protect the Confidentiality, Integrity, and Availability of
                  the data employed within the organization while providing
                  value to the way we conduct business.
                </p>
              </div>

              <div className="mb-8 mt-4">
                <h6 className="font-medium text-theme-dark">
                  We will achieve this by:
                </h6>
                <ul className="mx-4 list-disc ">
                  <li className="font-normal leading-8">
                    Serve to protect the Confidentiality, Integrity, and
                    Availability of the Information Resources maintained within
                    the organization using administrative, physical and
                    technical controls.
                  </li>
                  <li className="font-normal leading-8">
                    Focus on new ways of utilizing IT innovation to build
                    products and services for today&apos;s dynamic business
                    environment.
                  </li>
                  <li className="font-normal leading-8">
                    Use of all reasonable, appropriate, practical, and effective
                    security measures to protect our important processes and
                    assets to achieve our information security objectives.
                  </li>
                  <li className="font-normal leading-8">
                    Continually examine ways in which we can improve our use of
                    security measures to protect and enhance our business and
                    continual improvement in ISMS.
                  </li>
                  <li className="font-normal leading-8">
                    Protecting and managing our information assets to enable us
                    to meet our contractual, legislative, privacy and ethical
                    responsibilities and satisfy applicable IS requirements and
                    legal requirements as per the ISO 27001:2022 standard.
                  </li>
                  <li className="font-normal leading-8">
                    Providing our clients’ continuous process improvements,
                    productivity gains and improved quality through a
                    combination of domain expertise and technology-driven
                    optimization.
                  </li>
                </ul>
              </div>

              <div className="my-10 text-center lg:text-left">
                <p>
                  All employees ensure this policy and protect the security of
                  information assets from unauthorized use, modification,
                  disclosure, or destruction, whether accidental or intentional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityPolicy;
