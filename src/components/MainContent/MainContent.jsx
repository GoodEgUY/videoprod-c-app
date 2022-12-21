import React from "react";
import "./maincontent.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ModalCallback from "../ModalCallback/ModalCallback";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";
import { useState } from "react";

const MainContent = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      {modalOpened ? (
        <ModalCallback closeModal={() => setModalOpened(false)} />
      ) : null}
      <div className="mainContent">
        <div className="intro">
          <div className="introText">
            <p className="introParag">Якась дужеееее крута фраза</p>
          </div>
        </div>
        <div className="block2">
          <Tabs>
            <div className="aboutDashboard">
              <div className="aboutDashboardNav">
                <TabLink to="about">
                  <p>Іміджеві</p>
                </TabLink>
                <TabLink to="problem">
                  <p>Reels</p>
                </TabLink>
                <TabLink to="result">
                  <p>Контент</p>
                </TabLink>

                <TabLink to="goals">
                  <p>Щось інше</p>
                </TabLink>
              </div>
              <div className="aboutDashboardScreen">
                {/* 1 UI TAB */}
                <TabContent for="about">
                  <div className="block2content">
                    <div className="contentDashboard">
                      <div className="heightItemBox">
                        <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/borg.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                          <p className="contentItemName">BORG.</p>
                          <p className="contentItemTitle">
                            Борг-борг-борг-борг.
                          </p>
                        </div>
                        <div className="itemColumn">
                          <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/gt.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                            <p className="contentItemName">GREEN TRAVEL.</p>
                            <p className="contentItemTitle">Клік і готово!</p>
                          </div>
                          <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/oko.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                            <p className="contentItemName">ОКО</p>
                            <p className="contentItemTitle">Час бачити більше.</p>
                          </div>
                        </div>
                      </div>
                      <div className="heightItemBox">
                        <div className="itemColumn">
                          <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/easy.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                            <p className="contentItemName">EASY-PEASY</p>
                            <p className="contentItemTitle">Це тупо просто.</p>
                          </div>
                          <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/yaposhka.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                            <p className="contentItemName">YAPOSHKA 3.0.</p>
                            <p className="contentItemTitle">Кухня більше не потрібна.</p>
                          </div>
                        </div>
                        <div className="contentItem">
                        <div className="contentImg">
                            <img
                              src="./images/cases/imige/yaposhka4.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                          <p className="contentItemName">YAPOSHKA 4.0.</p>
                          <p className="contentItemTitle">Смачна причина повертатись.</p>
                        </div>
                      </div>
                      <div className="heightItemBox">
                        <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/lgbt.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                          <p className="contentItemName">LGBT.</p>
                          <p className="contentItemTitle">
                          Єдині як ніколи.
                          </p>
                        </div>
                        <div className="itemColumn">
                          <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/macpaw.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                            <p className="contentItemName">MACPAW.</p>
                            <p className="contentItemTitle">#DiakuYOU.</p>
                          </div>
                          <div className="contentItem">
                          <div className="contentImg">
                            <img
                              src="./images/cases/imige/farmer.png"
                              className="coverImg"
                              alt=""
                            />
                          </div>
                            <p className="contentItemName">FARMERHOOD.</p>
                            <p className="contentItemTitle">Від фермерів фермерам.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabContent>
                {/* 1 UI TAB */}

                {/* 2 UI TAB */}
                <TabContent for="problem">
                  <div className="block2content">
                    <div className="contentDashboard">
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                    </div>
                  </div>
                </TabContent>
                {/* 2 UI TAB */}

                {/* 3 UI TAB */}
                <TabContent for="result">
                  <div className="block2content">
                    <div className="contentDashboard">
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                    </div>
                  </div>
                </TabContent>
                {/* 3 UI TAB */}

                {/* 4 UI TAB */}
                <TabContent for="goals">
                  <div className="block2content">
                    <div className="contentDashboard">
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                    </div>
                  </div>
                </TabContent>
                {/* 4 UI TAB */}

                {/* 5 UI TAB */}
                <TabContent for="time">
                  <div className="block2content">
                    <div className="contentDashboard">
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                    </div>
                  </div>
                </TabContent>
                {/* 5 UI TAB */}

                {/* 6 UI TAB */}
                <TabContent for="stages">
                  <div className="block2content">
                    <div className="contentDashboard">
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                      <div className="contentItem">
                        <p className="contentItemName">Test</p>
                        <p className="contentItemTitle">Test title</p>
                      </div>
                    </div>
                  </div>
                </TabContent>
                {/* 6 UI TAB */}
              </div>
            </div>
          </Tabs>
        </div>
        <div className="block2">
          <p className="block2title">Блок 3(Послуги)</p>
          <div className="block2content">
            <p>Контент 1</p>
            <p>Контент 2</p>
          </div>
        </div>

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
