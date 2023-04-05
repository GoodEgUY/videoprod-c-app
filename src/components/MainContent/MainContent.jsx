import React from "react";
import { useState } from "react";
import "./maincontent.css";
import ModalCallback from "../ModalCallback/ModalCallback";
import IntroPage from "../IntroPage/IntroPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import Services from "../Services/Services";

import Team from "../Team/Team";
import MainCases from "../MainCases/MainCases";

const MainContent = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* Модальне вікно форми */}
      {modalOpened ? (
        <ModalCallback closeModal={() => setModalOpened(false)} />
      ) : null}
      <div className="mainContent" onLoadStart={scrollToTop}>
        {/* Блок инт */}
        
        <IntroPage />
        <div className="textAfterIntro">
          <p>
            Під «основним» блоком зробимо текстик невеличкий. Його надішлемо
            трішки пізніше. Але блок під нього можна вже зробити, щоб ми
            розуміли, як воно виглядає.
          </p>
        </div>
        {/* Блок кейсів */}
        <MainCases/>
        {/* Блок Компаній */}
        {/* <CompanySwiper /> */}
        {/* Блок послуги */}
        <Services />
        {/* Блок команда */}
        <Team />
        {/* Блок контакти */}
        <ContactsPage />
        {/* Кнопка зворотнього зв'язку */}
        <button
          className="openModal callback_button"
          onClick={() => {
            setModalOpened(true);
          }}
        >
          Тикай
        </button>
      </div>
    </>
  );
};
export default MainContent;
