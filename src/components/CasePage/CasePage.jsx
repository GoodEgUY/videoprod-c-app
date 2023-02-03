import React from "react";
import "./casepage.css";
import caserouter from "../../assests/config.routes/casecards/casecards.json";
import { useParams } from "react-router-dom";
// 1 stage pages

// 2 stage pages

const CasePage = () => {
  const { urlName } = useParams();

  const caseInfo = caserouter.find((project) => project.urlName === urlName);

  return (
    <>
      <div className="projectContent">
        <div className="projectIntro">
          <img className="introImage" src={caseInfo.img1} alt="" />
          <div className="projectIntroText">
            <p>{caseInfo.name}</p>
            <div className="introCross">
            <p>деталі</p>
            <img src="/images/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className="projectDetails">
          <p>{caseInfo.title}</p>
          <p>{caseInfo.text}</p>
        </div>

        
      </div>
    </>
  );
};

export default CasePage;
