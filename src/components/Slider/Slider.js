import React from "react";
import { SliderData } from "../../data/Slider/Slider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="h-[600px] lg:h-[860px]  "
      >
        {SliderData.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              className="h-full relative flex justify-center items-center  "
            >
              <div className="z-20 text-white text-center">
                <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                  {slide.title}
                </h1>
              </div>
              <div className="absolute top-0 w-full h-full">
                <img
                  className="object-cover h-full w-full "
                  src={slide.img}
                  alt=""
                />
              </div>
              <div className="absolute w-full h-full bg-black/70"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
