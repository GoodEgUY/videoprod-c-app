import React from "react";
import "./maincontent.css";
import ModalCallback from "../ModalCallback/ModalCallback";
import { useState } from "react";

const MainContent = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
    {modalOpened ?  (
        <ModalCallback closeModal={() => setModalOpened(false)} />
      ) : null}
    <div className="mainContent">

      <div className="introText">
        <p className="introParag">Блок 1</p>
      </div>
      <div className="block2">
        <p className="block2title">Блок 2(Кейси)</p>
        <div className="block2content">
          <p>Контент 1</p>
          <p>Контент 2</p>
        </div>
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
      <button className="openModal callback_button" onClick={() => {
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
