import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Card, Typography } from "@material-tailwind/react";
const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
        <Swiper
        onSlideChange={(swiper)=>{
            setActiveIndex(swiper.activeIndex)
          }}
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
            <div className="relative w-full bg-no-repeat bg-cover bg-center h-[548px]" style={{backgroundImage: 'url("/banner.jpg")'}}>
        {activeIndex == 0 &&<motion.div
          className="w-full h-full relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
                <Card className="absolute bottom-40 max-w-lg ml-6 sm:ml-0 right-6 bg-[#02a458]/50 backdrop-blur-sm p-4">
                <Typography
                  variant="h1"
                  className={`text-3xl md:text-4xl  text-white`}
                >
                  Your Journey Towards Wellness Starts Here
                  {/* <span className="tracking-wide ml-2"></span> */}
                </Typography>
                </Card>
        </motion.div>
        }
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative w-full bg-no-repeat bg-cover bg-center h-[548px]" style={{backgroundImage: 'url("/banner2.jpg")'}}>
          {activeIndex == 1 &&
          <motion.div
          className="w-full relative h-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="absolute bottom-40 max-w-lg ml-6 sm:ml-0 right-6 bg-[#02a458]/50 backdrop-blur-sm p-4">
                <Typography
                  variant="h1"
                  className={`text-3xl md:text-4xl  text-white`}
                >
                  Building a Bridge to Wellness
                  {/* <span className="tracking-wider ml-2">to Wellness</span> */}
                </Typography>
                </Card>
            </motion.div>
            }
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
