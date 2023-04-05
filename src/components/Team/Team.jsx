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
              <div className="teamateTitleWrapper"><p className="teamWho">Who is</p><p className="teamateName">YAROSLAV LUKASH</p></div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/eva.gif" alt="" />
              <div className="teamateTitleWrapper"><p className="teamWho">Who is</p><p className="teamateName">EVA LUKASH</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/misha.gif" alt="" />
              <div className="teamateTitleWrapper"><p className="teamWho">Who is</p><p className="teamateName">MISHA VLASENKO</p></div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/dasha.gif" alt="" />
              <div className="teamateTitleWrapper"><p className="teamWho">Who is</p><p className="teamateName">DASHA LUKASH</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="teamItem">
              <img src="/images/team/vadim.gif" alt="" />
              <div className="teamateTitleWrapper"><p className="teamWho">Who is</p><p className="teamateName">VADIM</p></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Team;
