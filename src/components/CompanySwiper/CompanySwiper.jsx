import React from "react";
import "./companyswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import brends from "../../assests/casesBase/brends/brends.json"

const CompanySwiper = () => {
  return (
    <div className="companySwiper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={3}
        slidesPerView={6}
        navigation
        className="company"
        loop={"true"}
      >
        {brends.map((obj) => (
          <SwiperSlide>
            <div className="companySwiperText">
              <img alt="brend logo" className="brendImage" src={obj.image}></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CompanySwiper;
