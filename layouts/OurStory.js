import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";
import { useTheme } from "./ThemeContext";
import SkeletonImage from "./components/SkeletonImage";

const OurStory = ({ data }) => {
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
      <section className="section pt-0 bg-gradient-to-b from-[#F7F8FE] to-white">
        {/* <Banner title={title} /> */}
        {/* About */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                {/* <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                /> */}
                <SkeletonImage/>
              </div>
            </div>
            <div className="animate md:col-6 md:order-1 lg:col-4 text-center lg:text-left">
              <p>{about_us.subtitle}</p>
              <h2
                className={`lg:bar-left section-middle-title mt-4 ${
                  darkTheme ? "text-white" : "text-[#424B66]"
                }`}
              >
                {about_us.title}
              </h2>
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            <p>{works.subtitle}</p>
            <h2
              className={`section-middle-title mt-4 ${
                darkTheme ? "text-white" : "text-[#424B66]"
              }`}
            >
              {works.title}
            </h2>
            {markdownify(works.content, "p", "mt-10")}
          </div>
          <div className="row mt-10 justify-center">
            {works.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-4 text-center lg:text-left">
              <p>{mission.subtitle}</p>
              <h2
                className={`section-middle-title lg:bar-left mt-4 ${
                  darkTheme ? "text-white" : "text-[#424B66]"
                }`}
              >
                {mission.title}
              </h2>
              {markdownify(mission.content, "p", "mt-10")}
            </div>
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                {/* <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={mission.image}
                  width={425}
                  height={487}
                  alt=""
                /> */}
                <SkeletonImage/>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        {/* <div className="container-xl relative">
          <div className="bg-theme absolute top-0 left-0 w-full">
          </div>
          <div className="row items-center justify-center py-[90px]">
            <div className="md:col-6 xl:col-4">
              <div className="animate p-5">
                <p>{video.subtitle}</p>
                {markdownify(video.title, "h2", "mt-4 section-title bar-left")}
                {markdownify(video.description, "p", "mt-10")}
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="px-4 ">
                <VideoPopup
                  id={video.video_id}
                  thumbnail={video.thumbnail}
                  width={540}
                  height={585}
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Clients */}
        <div className="section container">
          <div className="animate text-center">
            <p>{clients.subtitle}</p>
            <h2
              className={`section-middle-title mt-4 ${
                darkTheme ? "text-white" : "text-[#424B66]"
              }`}
            >
              {clients.title}
            </h2>
          </div>
          <div className="animate from-right col-12 mt-16">
            <Swiper
              loop={true}
              slidesPerView={3}
              breakpoints={{
                992: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={20}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
            >
              {clients.brands.map((brand, index) => (
                <SwiperSlide
                  className=" h-20 cursor-pointer px-6 py-6 grayscale  transition hover:grayscale-0 lg:px-10"
                  key={"brand-" + index}
                >
                  <div className="relative h-full">
                    <ImageFallback
                      className="object-contain"
                      src={brand}
                      sizes="100vw"
                      alt=""
                      fill={true}
                      priority={true}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Members */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>{our_member.subtitle}</p>
            {markdownify(our_member.title, "h2", "section-title mt-4")}
            {markdownify(our_member.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {our_member.list.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 text-center md:col-6 lg:col-4"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src={member.image}
                      width={245}
                      height={245}
                      alt={member.name}
                    />
                    <h4 className="mt-8">{member.name}</h4>
                    <p className="mt-3">{member.field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Office */}
        <div className="section container">
          <div className="animate text-center">
            <p>{our_office.subtitle}</p>
            <h2
              className={`section-middle-title mt-4 ${
                darkTheme ? "text-white" : "text-[#424B66]"
              }`}
            >
              {our_office.title}
            </h2>
            {markdownify(our_office.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row  justify-center">
                {our_office.countries.map((country, index) => (
                  <div
                    key={("country-", index)}
                    className="animate mt-10 md:col-6 xl:col-3"
                  >
                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]">
                      <ImageFallback
                        // className="mx-auto"
                        src={country.flag}
                        width={80}
                        height={80}
                        alt={country.name}
                      />
                      <h5 className="h4 mt-2">{country.name}</h5>
                      <p className="mt-2">{country.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
