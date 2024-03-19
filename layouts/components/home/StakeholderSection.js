import Link from 'next/link';
import React, { useRef } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageFallback from '../ImageFallback';
import { Pagination } from 'swiper';

const StakeholderSection = ({intro}) => {

    const cardRef1 = useRef(null);
    const pageRef1 = useRef(null);

    const handlePrevPagClick1 = () => {
        if (pageRef1.current) {
          pageRef1.current.slidePrev();
        }
      };
    
      const handleNextPagClick1 = () => {
        if (pageRef1.current) {
          pageRef1.current.slideNext();
        }
      };
    
      const handleSwiperPagInit1 = (swiper) => {
        pageRef1.current = swiper;
      };

  return (
    <>
    <div className={`mx-auto px-6 py-10 text-center`}>
    <h2 className='sm:h2 h4'>
        Why <span className="text-primary">build</span> when you can{" "}
        <span className="btn sm:rounded-lg rounded bg-primary p-1 px-2 font-medium text-white">
          buy?
        </span>
      </h2>
      <p className={`text-[#878B9E] sm:text-[20px] text-base`}>
      A cross-functional approach to DevOps
      </p>
    </div>

    <div className="animate relative mt-10 w-full text-left">
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: ".pagination-button-next",
          prevEl: ".pagination-button-prev",
        }}
        onInit={handleSwiperPagInit1}
        onNavigationNext={handleNextPagClick1}
        onNavigationPrev={handlePrevPagClick1}
        pagination={{
          type: "bullets",
          clickable: true,
          dynamicBullets: false,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = cardRef1.current;
        }}
        modules={[Pagination]}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {intro.list.map((item, index) => (
          <SwiperSlide
            key={"feature-" + index}
            className="justify-left flex items-start mb-10"
          >
            <div
              className={`feature-card m-4 overflow-hidden rounded-md bg-white px-7 py-16 backdrop-blur-xl backdrop-sepia-0 backdrop-filter transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E8F4FE]`}
              style={{ height: "360px" }}
            >
              <div className="justify-left items-center gap-4 rounded-md">
                <div className="inline-flex h-20 w-20 rounded-md text-primary">
                  <ImageFallback
                    className="banner-img rounded-lg"
                    src={item.icon}
                    width={100}
                    height={100}
                    priority={true}
                    alt=""
                  />
                </div>

                <h4 className="my-1 text-primary">{item.title}</h4>
              </div>
              <p className="mb-5 h-20 text-[#878B9E] text-sm sm:text-base">
                {item.subtitle}
              </p>
              <div className="absolute -bottom-4 -right-4 transform  rounded-full p-5 text-4xl text-primary duration-300 hover:bg-primary hover:text-6xl hover:font-bold hover:text-white">
                <Link href={item.link}>
                  <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="relative mt-9">
        <div className="grid items-center justify-center">
          <div ref={cardRef1}></div>
        </div>
      </div> */}
    </div>
  </>
  )
}

export default StakeholderSection