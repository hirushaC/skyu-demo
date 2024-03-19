import Link from "next/link";
import React from "react";

const PrivacyPolicy = ({ data }) => {
  const { frontmatter } = data;
  const { purpose_desc } = frontmatter;

  return (
    <>
      <section className={`section bg-[#0368B1]`}>
        <div className="container">
          <div className="relative text-center">
            <h3 className="text-theme-light select-none">Privacy Policy</h3>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="relative">
            <div className="mx-10 lg:mx-32">
              <div className="mb-10 text-center lg:text-left">
                <h4 className="font-medium text-primary">Purpose</h4>
                <p>{purpose_desc}</p>
              </div>
              <div className="my-10 text-center lg:text-left">
                <h4 className="font-medium text-primary">Audience</h4>
                <p>
                  The Insighture Privacy Policy applies to users who have
                  information collected through{" "}
                  <Link href="/contact" className="text-primary">
                    {" "}
                    our contact form
                  </Link>
                </p>
              </div>

              <h4 className="text-center font-medium text-primary lg:text-left">
                Policy
              </h4>

              {/* Notice */}
              <div className="mb-8 mt-4">
                <h6 className="font-medium text-theme-dark underline">
                  Notice
                </h6>
                <ul className="mx-4 list-disc ">
                  <li className="font-normal leading-8">
                    Insighture is the sole owner of information collected on
                    this{" "}
                    <Link href={"skyu.io"} className="text-primary">
                      Website
                    </Link>{" "}
                    or through these Services.
                  </li>
                  <li className="font-normal leading-8">
                    We only collect information that you voluntarily share via
                    this website, email, or other direct contact.
                  </li>
                  <li className="font-normal leading-8">
                    We will not sell or rent this information to anyone.
                  </li>
                </ul>
              </div>

              {/* Purpose */}
              <div className="my-8">
                <h6 className="font-medium text-theme-dark underline">
                  Purpose
                </h6>
                <ul className="mx-4 list-disc ">
                  <li className="font-normal leading-8">
                    We will use your information to respond to you based on the
                    reason you contacted us.
                  </li>
                  <li className="font-normal leading-8">
                    We only share your information with authorized business
                    partners as it relates to processes related to your request.
                  </li>
                  <li className="font-normal leading-8">
                    We may contact you for Insighture-related messaging; you
                    have the ability to request to not receive these
                    communications.
                  </li>
                </ul>
              </div>

              {/* Consent */}
              <div className="my-8">
                <h6 className="font-medium text-theme-dark underline">
                  Consent
                </h6>
                <ul className="mx-4 list-disc">
                  <li className="font-normal leading-8">
                    We will not voluntarily share your information with a third
                    party without prior authorization, except:
                    <ul className="mx-4 list-disc">
                      <li>With an affiliate or agent of Insighture,</li>
                      <li>With the written authorization,</li>
                      <li>
                        To enforce our privacy policy, to comply with law,
                        regulation, or other legal processes or to protect the
                        rights, property or safety of us or others,
                      </li>
                      <li>
                        With a regulator or law enforcement agency or personnel,
                      </li>
                      <li>In emergency situations,</li>
                      <li>
                        To protect against misuse or unauthorized use of this{" "}
                        <Link href={"skyu.io"} className="text-primary">
                          Website
                        </Link>{" "}
                        or the Insighture Service,
                      </li>
                      <li>
                        To detect or prevent criminal activity or fraud, or
                      </li>
                      <li>
                        In the event that we or substantially all of our assets
                        are acquired by one or more third parties as a result of
                        an acquisition, merger, sale, reorganization,
                        consolidation or liquidation, in which case information
                        may be one of the transferred assets.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Security */}
              <div className="my-8">
                <h6 className="font-medium text-theme-dark underline">
                  Security
                </h6>
                <ul className="mx-4 list-disc ">
                  <li className="font-normal leading-8">
                    We take precautions to protect your information both online
                    and offline.
                  </li>
                  <li className="font-normal leading-8">
                    Insighture has implemented physical, administrative, and
                    technical safeguards and operational procedures to protect
                    information we collect and/or maintain.
                  </li>
                  <li className="font-normal leading-8">
                    Transactions over the internet involving information are
                    encrypted.
                  </li>
                  <li className="font-normal leading-8">
                    We restrict access to your information in our database to
                    authorized users.
                  </li>
                </ul>
              </div>

              {/* Access */}
              <div className="my-8">
                <h6 className="font-medium text-theme-dark underline">
                  Access
                </h6>
                <ul className="mx-4 list-disc">
                  <li className="font-normal leading-8">
                    You may opt out of communication with us at any time.
                  </li>
                  <li className="font-normal leading-8">
                    You can contact us via{" "}
                    <Link
                      href={`mailto:hello@insighture.com`}
                      className="text-primary underline"
                    >
                      hello@insighture.com
                    </Link>
                    ,{" "}
                    <Link href={`tel:+61390056585`} className="text-primary">
                      +61 3 9005 6585
                    </Link>{" "}
                    to:
                    <ul className="mx-4 list-disc">
                      <li>Find out what data we maintain about you, if any.</li>
                      <li>Change/correct any data we have about you.</li>
                      <li>Have us delete any data we have about you.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Accountability */}
              <div className="my-8">
                <h6 className="font-medium text-theme-dark underline">
                  Accountability
                </h6>
                <ul className="mx-4 list-disc ">
                  <li className="font-normal leading-8">
                    Insighture has appointed a Privacy Officer and Security
                    Officer who are responsible for the protection of
                    information.
                  </li>
                  <li className="font-normal leading-8">
                    Insighture is committed to resolving any complaints about
                    your privacy and our collection or use of your personal
                    information. If you have any questions or complaints
                    regarding this policy, please contact us via{" "}
                    <Link
                      href={`mailto:hello@insighture.com`}
                      className="text-primary underline"
                    >
                      hello@insighture.com
                    </Link>
                    ,{" "}
                    <Link href={`tel:+61390056585`} className="text-primary">
                      +61 3 9005 6585
                    </Link>
                    .
                  </li>
                  <li className="font-normal leading-8">
                    We collect information about you and your use of this
                    Website through the use of cookies. Cookies are small files
                    that a website can store on your computer&apos;s hard drive
                    for record-keeping or other administrative purposes. If you
                    are concerned about the use of cookies, you can choose to
                    enable a feature in your browser software that will erase
                    cookies, block all cookies, or warn the user before cookies
                    are stored or exchanged. If you reject cookies, you will
                    only be able to view the site.
                  </li>
                </ul>
              </div>

              {/* Links */}
              <div className="my-8">
                <h6 className="font-medium text-theme-dark underline">Links</h6>
                <ul className="mx-4 list-disc ">
                  <li className="font-normal leading-8">
                    This Website includes links to other websites. This Privacy
                    Policy does not apply to these links.
                  </li>
                  <li className="font-normal leading-8">
                    We do not endorse and are not responsible for the operation
                    or content of these websites. Please consult the privacy
                    policy for each website you visit.
                  </li>
                </ul>
              </div>

              {/* Disclosure */}
              <div className="my-8">
                <h6 className="font-medium text-theme-dark underline">
                  Disclosure
                </h6>
                <ul className="mx-4 list-disc">
                  <li className="font-normal leading-8">
                    Information is collected by Insighture. Contact information:
                    <ul className="mx-4 list-disc">
                      <li>
                        <Link
                          href={"https://maps.app.goo.gl/dtBXmJAQWbqyGRvR7"}
                          target="_blank"
                          className="text-primary"
                        >
                          223 Glenfern Road, Upwey, Victoria 3158, Australia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`tel:+61390056585`}
                          className="text-primary"
                        >
                          +61 3 9005 6585
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`mailto:hello@insighture.com`}
                          className="text-primary underline"
                        >
                          hello@insighture.com
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-center font-medium">
                <p>Our Privacy Policy was last updated on Mar 11, 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
