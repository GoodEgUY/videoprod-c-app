import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import MainContent from "../MainContent/MainContent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CasesPage from "../CasesPage/CasesPage";


// 1 stage pages


// 2 stage pages



const Main = () => {
  return (
    <>
<BrowserRouter>
      <Header/>
       
      <div className="screenContent">
        <div className="content">
          
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/works" element={<CasesPage />} />
          </Routes>
        </div>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Main;
