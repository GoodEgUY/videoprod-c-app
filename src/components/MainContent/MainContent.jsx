import React from "react";
import { useState } from "react";
import "./maincontent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ModalCallback from "../ModalCallback/ModalCallback";
import IntroPage from "../IntroPage/IntroPage";
import CasesPage from "../CasesPage/CasesPage";
import ContactsPage from "../ContactsPage/ContactsPage";

const MainContent = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
    {/* Модальне вікно форми */}
      {modalOpened ? (
        <ModalCallback closeModal={() => setModalOpened(false)} />
      ) : null}
      <div className="mainContent">
        {/* Блок инт */}
        <IntroPage />
        {/* Блок кейсів */}
        <CasesPage />
        {/* Блок послуги */}
        <div className="block2">
          <p className="block2title">Блок 3(Послуги)</p>
          <div className="block2content">
           
          </div>
        </div>
        {/* Блок команда */}
        <div className="blockTeam">
          <div className="block3">
            <Swiper
              modules={[Navigation, Pagination, EffectFade]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
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
        {/* Блок контакти */}
        <ContactsPage />
        {/* Кнопка зворотнього зв'язку */}
        <button
          className="openModal callback_button"
          onClick={() => {
            setModalOpened(true);
          }}
        >
          Зв'язатися
        </button>
      </div>
    </>
  );
};
export default MainContent;
