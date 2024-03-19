import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudies = ({ casestudies }) => {
  return (
    <div className="container text-center">
      <div className="aniamte relative">
        <div className="items-left justify-left text-left">
          <h2
            className={`sm:h2 h4 mt-4 text-center text-[#424B66] sm:text-left`}
          >
            {casestudies.title}
          </h2>
          {markdownify(
            casestudies.description,
            "p",
            "pb-8 text-center sm:text-left"
          )}
        </div>

        <div className={`flex items-center justify-center`}>
          <div className={`grid gap-8 lg:grid-cols-2 lg:grid-rows-2`}>
            <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
              <Image
                src="/images/case_studies/optimizing-idp.png"
                className="w-full h-full object-cover object-center"
                alt="omnichannel"
                width={500}
                height={200}
              />
              <div
                className={`grid h-full place-content-center bg-white p-10 text-center lg:text-left`}
              >
                <h3 className={`font-medium`}>
                  Compliance, Security, and Policies Associated with a Public
                  Sector Enterprise
                </h3>
                <p className="mt-2 text-[#878B9E]">
                  The essence of GRC lies in aligning IT and business
                  strategies, managing risks proactively, and ensuring
                  compliance with regulatory standards.
                </p>
                <div>
                  <Link
                    href="/blogs/compliance-security-and-policies-associated-with-a-public-sector-enterprise"
                    className="mt-5 inline-flex text-sky-500 hover:text-sky-900"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex rounded-md border border-slate-200 lg:text-left">
              <div className={`flex-1 bg-white p-10`}>
                <h3 className={`text-xl font-medium`}>
                  DORA Metrics and Engineering Excellence, Achieving Faster
                  Releases
                </h3>
                <p className="mt-2 text-[#878B9E]">
                  Harnessing the power of DORA Metrics can cultivate improved
                  collaboration among development, operations, and business
                  teams, paving the way for a more cohesive and efficient
                  working environment.
                </p>
                <Link
                  href="/blogs/dora-metrics-and-engineering-excellence-achieving-faster-releases"
                  className="mt-4 inline-flex text-sky-500 hover:text-sky-900"
                >
                  Read More →
                </Link>
              </div>

              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                  <Image
                    src="/images/case_studies/goldenpath.png"
                    className="object-ceneter h-full w-full object-cover lg:rounded-r-md"
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="flex rounded-md border border-slate-200 lg:text-left">
              <div className={`flex-1 bg-white p-10`}>
                <h3 className={`text-xl font-medium`}>
                  Maximizing DevOps efficiency by streamlining deployments with
                  GitOps
                </h3>
                <p className="mt-2 text-[#878B9E]">
                  Integrating GitOps into DevOps practices significantly boosts
                  operational efficiency and deployment speed, fundamentally
                  transforming the software development lifecycle.
                </p>
                <Link
                  href="/blogs/maximizing-devops-efficiency-by-streamlining-deployments-with-gitops"
                  className="mt-4 inline-flex text-sky-500 hover:text-sky-900"
                >
                  Read More →
                </Link>
              </div>

              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                  <Image
                    src="/images/case_studies/security.png"
                    className="h-full w-full object-cover object-right-bottom lg:rounded-r-md"
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
