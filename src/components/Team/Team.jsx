import React from "react";
import "./team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
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
                <div className="teamItem"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teamItem"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teamItem"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teamItem"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teamItem"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teamItem"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

);
};
export default Team;