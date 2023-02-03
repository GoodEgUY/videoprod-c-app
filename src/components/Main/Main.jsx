import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import MainContent from "../MainContent/MainContent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CasesPage from "../CasesPage/CasesPage";
import CasePage from "../CasePage/CasePage";


// 1 stage pages


// 2 stage pages



const Main = () => {
  return (
    <>
<BrowserRouter>
      <Header/>
       
      <div className="screenContent">
        <div className="content">
          
          <Routes >
            <Route path="/" element={<MainContent />} />
            <Route path="/works" element={<CasesPage />} />
            <Route path="/works/:urlName" element={<CasePage />} />
          </Routes>
        </div>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Main;
