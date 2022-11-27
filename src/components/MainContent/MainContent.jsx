import React from "react";
import "./maincontent.css";

const MainContent = () => {
  return (
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
    </div>
  );
};
export default MainContent;
