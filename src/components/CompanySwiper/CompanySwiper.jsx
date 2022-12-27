import React from "react";
import "./companyswiper.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
    <SwiperSlide>
      <p className="companySwiperText">BREND</p>
    </SwiperSlide>
  </Swiper>
  </div>
  );
};
export default CompanySwiper;