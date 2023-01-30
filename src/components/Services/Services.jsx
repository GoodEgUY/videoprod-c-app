import React from "react";
import "./services.css";
import { useState } from "react";
import ModalServices from "../ModalServices/ModalServices";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesName, setServicesName] = useState();


  console.log(modalOpen)
  const openFormServices1 = () => {
   

    setServicesName("Content");
    setModalOpen(true);

    console.log(servicesName);
  };
  const openFormServices2 = () => {
    
    setServicesName("Fashion");
    setModalOpen(true);

    console.log(servicesName);
    
  };
  const openFormServices3 = () => { 
    setModalOpen(true);
    setServicesName("Reels");
   

    console.log(modalOpen);
  };
  return (
    <>
     { modalOpen ? <ModalServices services={servicesName} closeModal={() => setModalOpen(false)} /> : null }
      <div className="services">
        <div className="servicesWrapper">
          <div className="serviceItem" onClick={openFormServices1}>
            <p>Зйомка контенту</p>
          </div>
          <div className="serviceItem" onClick={openFormServices2}>
            <p>Іміджева реклама</p>
          </div>
          <div className="serviceItem" onClick={openFormServices3}>
            <p>Зйомка рілз</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
