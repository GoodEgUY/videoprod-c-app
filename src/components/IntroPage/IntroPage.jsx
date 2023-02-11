import React from "react";
import "./intropage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="introSlide">
            <video  preload="auto" loop muted autoPlay className="introVideo">
                <source
                  src="/images/video1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="introSlide">
              <video  preload="auto" loop muted autoPlay className="introVideo">
                <source
                  src="/images/video2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="introSlide">
            <video  preload="auto" loop muted autoPlay className="introVideo">
                <source
                  src="/images/video3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="introText">
          <p className="introParag">PALAY</p>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
