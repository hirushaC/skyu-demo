import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudies = ({ casestudies }) => {
  return (
    <div className="container text-center">
      <div className="aniamte relative">
        <div className="items-left justify-left text-left">
        <h2 className={`mt-4 text-[#424B66] text-center sm:text-left sm:h2 h4`}>
            {casestudies.title}
          </h2>
          {markdownify(casestudies.description, "p", "pb-8 text-center sm:text-left")}
        </div>
        
        <div className={`flex items-center justify-center`}>
          <div className={`grid gap-8 lg:grid-cols-2 lg:grid-rows-2`}>
            <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
              <Image
                src="/images/case_studies/optimizing-idp.png"
                className="w-full object-cover object-center"
                alt="omnichannel"
                width={400}
                height={100}
                style={{height: '315px'}}
              />
              <div
                className={`grid h-full place-content-center bg-white p-10 text-center lg:text-left`}
              >
                <h3 className={`font-medium`}>SkyU overview</h3>
                <p className="mt-2 text-[#878B9E]">
                  SkyU is an internal developer platform that puts simplicity
                  and ownership back into the IT factory, Ops and Platform teams
                  workflows.
                </p>
                <div>
                  <Link
                    href="/platform"
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
                  The Role of Product Management in Optimizing Internal
                  Developer Platforms
                </h3>
                <p className="mt-2 text-[#878B9E]">
                  At the end of the day, the developer is your customer.
                  Platforms built without product discipline eventually evolve
                  into leaky abstractions.
                </p>
                {/* <Link
                  href="/blogs/the-role-of-product-management-in-optimizing-internal-developer-platforms"
                  className="mt-4 inline-flex text-sky-500 hover:text-sky-900"
                >
                  Read More →
                </Link> */}
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
                  Golden Path Versus Golden Cage in Platform Engineering
                </h3>
                <p className="mt-2 text-[#878B9E]">
                  The dichotomy of &apos;Golden Path&apos; versus &apos;Golden
                  Cage&apos; approaches. Examine their impact on innovation,
                  flexibility, and long-term sustainability within digital
                  ecosystems.
                </p>
                {/* <Link
                  href="/blogs/golden-path-versus-golden-cage-in-platform-engineering"
                  className="mt-4 inline-flex text-sky-500 hover:text-sky-900"
                >
                  Read More →
                </Link> */}
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
