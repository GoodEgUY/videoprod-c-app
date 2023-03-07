import React, { useState } from "react";
import "./team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Team = () => {
  const[slides,setSlides] = useState(false)
  const slidesPerView = () => {
    if (window.innerWidth < 550) {
   setSlides(true)
 } else {
   setSlides(false)
 }
 }

  return (
    <div className="blockTeam" onLoad={slidesPerView}>
      <h2>Наша команда</h2>
      <div className="block3">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={slides? 1:3}
          autoplay={{
            delay: 2000,
            
          }}
          loop
        >
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/yaroslav.gif" alt="" />
              <p className="teamateName">YAROSLAV LUKASH</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/eva.gif" alt="" />
              <p className="teamateName">EVA LUKASH</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/misha.gif" alt="" />
              <p className="teamateName">MISHA VLASENKO</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/dasha.gif" alt="" />
              <p className="teamateName">DASHA LUKASH</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/vadim.gif" alt="" />
              <p className="teamateName">VADIM</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Team;
