import React, { useState } from "react";
import "./companyswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import brends from "../../assests/config.routes/brends/brends.json"

const CompanySwiper = () => {
  const [slides, setSlides] = useState(false)
  const slidesPerView = () => {
     if (window.innerWidth < 550) {
    setSlides(true)
  } else {
    setSlides(false)
  }
  }
 
  return (
    <div className="companySwiper" onLoad={slidesPerView}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={3}
        slidesPerView={slides? 3:7}
        
        className="company"
        loop={"true"}
      >
        {brends.map((obj) => (
          <SwiperSlide>
            <div className="slideWrapper">
            <div className="companySwiperText">
              <img alt="brend logo" className="brendImage" src={obj.image}></img>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CompanySwiper;
