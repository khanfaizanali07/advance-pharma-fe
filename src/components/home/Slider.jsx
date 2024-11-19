import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
const Slider = () => {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
            <div className="w-full bg-no-repeat bg-cover bg-center h-[548px]" style={{backgroundImage: 'url("/banner.jpg")'}}>
                <img src="/slide1.jpeg" alt="" className="w-full"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full bg-no-repeat bg-cover bg-center h-[548px]" style={{backgroundImage: 'url("/banner2.jpg")'}}>
                <img src="/slide2.jpg" alt="" className="w-full"/>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
