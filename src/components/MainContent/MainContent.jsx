import React from "react";
import "./maincontent.css";
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
          <p className="block2title">Блок 2(Кейси)</p>
            <Tabs>
              <div className="aboutDashboard">
                <div className="aboutDashboardNav">
                  <TabLink to="about">
                    <p>Таби</p>
                  </TabLink>
                  <TabLink to="problem">
                    <p>Таби</p>
                  </TabLink>
                  <TabLink to="result">
                    <p>ще таб</p>
                  </TabLink>

                  <TabLink to="goals">
                    <p> і ще таби</p>
                  </TabLink>
                  <TabLink to="time">
                    <p>іі ще табиии</p>
                  </TabLink>
                  <TabLink to="stages">
                    <p>останній таб</p>
                  </TabLink>
                </div>
                <div className="aboutDashboardScreen">
                  {/* 1 UI TAB */}
                  <TabContent for="about">
                    
                    <div className="block2content">
                      <p>Контент 1</p>
                    </div>
                  </TabContent>
                  {/* 1 UI TAB */}

                  {/* 2 UI TAB */}
                  <TabContent for="problem">
                  <div className="block2content">
                      <p>Контент 2</p>
                    </div>
                  </TabContent>
                  {/* 2 UI TAB */}

                  {/* 3 UI TAB */}
                  <TabContent for="result">
                  <div className="block2content">
                      <p>Контент 3</p>
                    </div>
                  </TabContent>
                  {/* 3 UI TAB */}

                  {/* 4 UI TAB */}
                  <TabContent for="goals">
                  <div className="block2content">
                      <p>Контент 4</p>
                    </div>
                  </TabContent>
                  {/* 4 UI TAB */}

                  {/* 5 UI TAB */}
                  <TabContent for="time">
                  <div className="block2content">
                      <p>Контент 5</p>
                    </div>
                  </TabContent>
                  {/* 5 UI TAB */}

                  {/* 6 UI TAB */}
                  <TabContent for="stages">
                    
                    <div className="block2content">
                      <p>Контент 6</p>
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
        <div className="block2">
          <p className="block2title">Блок 3(Команда)</p>
          <div className="block2content">
            <div className="teamItem"></div>
            <div className="teamItem"></div>
            <div className="teamItem"></div>
            <div className="teamItem"></div>
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
