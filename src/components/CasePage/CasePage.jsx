import React from "react";
import "./casepage.css";
import IntroPage from "../IntroPage/IntroPage";

import { useLocation} from "react-router-dom";
import GreenTravel from "../Projects/GreenTravel";


// 1 stage pages

// 2 stage pages

const CasePage = () => {
  
  
  const location = useLocation()
  return (
    <>
    {location.pathname === "/works/greentravel" && <GreenTravel/>}
    {location.pathname === "/works/borg" && <IntroPage/>}
  
    </>
  );
};

export default CasePage;
