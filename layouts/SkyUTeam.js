import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useTheme } from "./ThemeContext";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";

const SkyUTeam = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  const { darkTheme } = useTheme();

  return (
    <>
      <section className="section bg-[#0368B1]">
        <div className="container">
          <div className="animate relative text-center">
            <h1 className={`mb-4 text-theme-light`}>{about_us.title}</h1>
            {markdownify(
              about_us.content,
              "p",
              "text-[#878B9E] text-[#E2E4EB]"
            )}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="row items-center justify-center gap-10">
            <div className="animate grid gap-5 lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto w-full rounded-lg bg-auto object-cover lg:h-[400px]"
                src={mission.image1}
                width={700}
                height={511}
                alt="image 1"
              />
            </div>
            <div className="animate text-center lg:col-5 lg:order-1 lg:text-left">
              <h2 className="text-[#878B9E]">
                {mission.title}
              </h2>
              <h4 className="pb-5 pt-2">{mission.subtitle}</h4>
              <p className="pb-10">{mission.content}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-light">
        <div className="container">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate grid lg:grid-cols-2 gap-10">
              <ImageFallback
                className="mx-auto rounded-lg"
                src={mission.image2}
                width={450}
                height={311}
                alt="image 2"
              />
              <div className="flex flex-col place-items-center items-center justify-center gap-10 divide-y-2 px-10 lg:mx-0">
                <div>
                  <h3 className="text-[#878B9E]">
                    Problem
                  </h3>
                  <p className="py-1 pt-2 text-[16px]">{mission.problem}</p>
                </div>
                <div className="pt-8">
                  <h3 className="text-[#878B9E]">
                    Solution
                  </h3>
                  <p className="py-1 pt-2 text-[16px]">{mission.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section container">
          <div className="flex items-center justify-center pb-10 text-center">
            <h2>{our_member.title}</h2>
          </div>
          <div className="row justify-center">
            <Image
              className="mx-auto w-full rounded-2xl bg-auto object-cover"
              src={mission.image3}
              width={700}
              height={511}
              alt="team photo"
              priority
            />
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

export default SkyUTeam;
