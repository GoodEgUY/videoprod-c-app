import React from "react";
import "./casepage.css";
import caserouter from "../../assests/config.routes/casecards/casecards.json";
import { useParams } from "react-router-dom";
// 1 stage pages

// 2 stage pages

const CasePage = () => {
  const { urlName } = useParams();

  const caseInfo = caserouter.find((project) => project.urlName === urlName);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="projectContent" onLoadStart={scrollToTop}>
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
        <div className="projectImages">
          <img src={caseInfo.img2} alt="" />
          <img src={caseInfo.img3} alt="" />
        </div>
        <div className="projectDetails">
        <p className="projectText">{caseInfo.text1}</p>
        </div>
        <div className="projectBackstageVideo">
        <iframe width="730" height="415" src="https://www.youtube.com/embed/nPhGvW5td9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
};

export default CasePage;
