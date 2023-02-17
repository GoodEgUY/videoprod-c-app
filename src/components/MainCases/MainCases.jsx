import React from "react";

import "./maincases.css";


import mainCases from "../../assests/config.routes/casesBase/mainCases.json";
import CaseCard from "../CasesPage/CaseCard/CaseCard";

const MainCases = () => {
  
  return (
    <>
      
        <div className="aboutDashboardScreen">
          <div className="caseCategoryPage">
            <div className="casePage">
              {mainCases.map((obj) => (
                <CaseCard
                  key={obj.id}
                  name={obj.name}
                  title={obj.title}
                  image={obj.image}
                  urlName={obj.urlName}
                />
              ))}
            </div>
          </div>
        </div>
        
    </>
  );
};
export default MainCases;