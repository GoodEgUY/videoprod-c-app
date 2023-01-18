import React from "react";
import { useState } from "react";
import "./maincontent.css";

import ModalCallback from "../ModalCallback/ModalCallback";
import IntroPage from "../IntroPage/IntroPage";
import mainCases from "../../assests/config.routes/casesBase/mainCases.json";
import ContactsPage from "../ContactsPage/ContactsPage";
import CaseCard from "../CasesPage/CaseCard/CaseCard";
import Services from "../Services/Services";
import CompanySwiper from "../CompanySwiper/CompanySwiper";
import Team from "../Team/Team";

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
        <div className="textAfterIntro">
          <p>
            Під «основним» блоком зробимо текстик невеличкий. Його надішлемо
            трішки пізніше. Але блок під нього можна вже зробити, щоб ми
            розуміли, як воно виглядає.
          </p>
        </div>
        {/* Блок кейсів */}
        <div className="aboutDashboardScreen">
        <div className="caseCategoryPage">
          <div className="casePage">
            {mainCases.map((obj) => (
              <CaseCard
                key={obj.id}
                name={obj.name}
                title={obj.title}
                image={obj.image}
              />
            ))}
          </div>
        </div>
        </div>
        <CompanySwiper/>
        {/* Блок послуги */}
        <Services/>
        {/* Блок команда */}
              <Team/>
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
