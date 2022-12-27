import React from "react";
import "./intropage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const IntroPage = () => {
  return (
    <>
    <div className="intro">
      <Swiper
      loop="true"
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="introSlide"><img className="introMediaContent" src="./images/gif.gif" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="introSlide"><img className="introMediaContent" src="./images/gif2.gif" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="introSlide"><img className="introMediaContent" src="./images/gif2.gif" alt="" /></div></SwiperSlide>
        
      </Swiper>
    
      <div className="introText">
        <p className="introParag">Якась дужеееее крута фраза</p>
      </div>
    </div>
    </>
  );
};

export default IntroPage;
