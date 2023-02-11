import React from "react";
import "./services.css";
import { useState } from "react";
import ModalServices from "../ModalServices/ModalServices";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesName, setServicesName] = useState();

  console.log(modalOpen);
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
      {modalOpen ? (
        <ModalServices
          services={servicesName}
          closeModal={() => setModalOpen(false)}
        />
      ) : null}
      <div className="services">
        <div className="servicesWrapper">
          <div className="serviceItem" onClick={openFormServices1}>
            <div className="serviceItemBody">
              
              <img
                className="serviceItemImage"
                src="/images/services/content1.png"
                alt=""
              />
              <div className="serviceItemName">
                <img src="/images/arrow.png" alt="" className="leftArrow" />
                <p>ЗЙОМКА КОНТЕНТУ</p>

                <img src="/images/arrow.png" alt="" className="rightArrow" />
              </div>
              <div className="serviceItemTitle">
                <p>
                  Для бізнесів.
                  <br />
                  Від кафешки і одягу до косметолога і блога на ютуб. Може:
                  <br />
                  - розповісти про продукт/послуги
                  <br />
                  - перелічити асортимент
                  <br />
                  - наповнити соц.мережі
                  <br />
                  - розповісти про новинки… і про що завгодно))
                  <br />
                  <br />
                  Тикай, бо вам таке треба:)
                </p>
              </div>
            </div>
          </div>
          <div className="serviceItem" onClick={openFormServices2}>
            <div className="serviceItemBody">
              <img
                className="serviceItemImage"
                src="/images/services/fashion.png"
                alt=""
              />
              <div className="serviceItemName">
              <img src="/images/arrow.png" alt="" className="leftArrow" />
                <p>ЗЙОМКА КОНТЕНТУ</p>

                <img src="/images/arrow.png" alt="" className="rightArrow" />
              </div>
              <div className="serviceItemTitle">
                <p>
                  Для малих і середніх бізнесів (а можна й великих), які про
                  свій концепт, місію та особливість.
                  <br />
                  Не продасть все і одразу. Але зробить так, щоб клієнт вас
                  запам'ятав, друзям розказав і хотів купувати через рік.
                  <br />
                  <br />
                  Тикай, бо вам таке треба:)
                </p>
              </div>
            </div>
          </div>
          <div className="serviceItem" onClick={openFormServices3}>
            <div className="serviceItemBody">
              <img
                className="serviceItemImage"
                src="/images/services/reels.jpg"
                alt=""
              />
              <div className="serviceItemName">
              <img src="/images/arrow.png" alt="" className="leftArrow" />
                <p>ЗЙОМКА КОНТЕНТУ</p>

                <img src="/images/arrow.png" alt="" className="rightArrow" />
              </div>
              <div className="serviceItemTitle">
                <p>
                  Для всіх, хто продає через Інстаграм.
                  <br />
                  І хоче мати контент, щоб було цікаво і хотілось. <br />
                  <br />
                  Це мастхев. <br />
                  Ми робимо його під задачу: <br />
                  з трендовою музикою/ у вигляді інтерв’юшок/ як огляди/ чи
                  просто під рубрики.
                  <br />
                  І воно працює.
                  <br />
                  <br />
                  Тикай, бо вам таке треба:)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
