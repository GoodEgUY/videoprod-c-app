import React from "react";
import "./team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Team = () => {
  return (
    <div className="blockTeam">
      <div className="block3">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
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
