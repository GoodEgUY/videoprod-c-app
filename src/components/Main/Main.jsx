import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import { Suspense} from "react";
import Loader from "../Loader/Loader";


// 1 stage pages


// 2 stage pages



const Main = () => {

  const MainContent = React.lazy(() => import("../MainContent/MainContent"))
  const CasesPage = React.lazy(() => import("../CasesPage/CasesPage"))
  const CasePage = React.lazy(() => import("../CasePage/CasePage"))
  
  return (

    <>
<BrowserRouter>

      <Header/>
       
      <div className="screenContent">
        <div className="content">
          
          <Routes >
            <Route path="/" element={<Suspense fallback={<Loader/>}><MainContent /></Suspense>} />
            <Route path="/works" element={<Suspense fallback={<Loader/>}><CasesPage /></Suspense>} />
            <Route path="/works/:urlName" element={<Suspense fallback={<Loader/>}><CasePage /></Suspense>} />
          </Routes>
        </div>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Main;
