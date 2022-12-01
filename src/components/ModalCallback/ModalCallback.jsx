import React, { useState } from "react";
import axios from "axios";
import "./modalcallback.css";

const ModalCallback = (props) => {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientGoal, setClientGoal] = useState("");
  const [clientText, setClientText] = useState("");
 

  const botToken = "5987621859:AAG4xA4TVnmztLIebEQJmR_t47I61Z9IUmU";
  const urlApi = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const chatId = "-1001565514969";
  const [success, setSuccess] = useState("");

  const sendAlert = (e) => {
    e.preventDefault();

    let message = `<b>🤩Заявка на обратный звонок🤩</b>\n`;
    message += `<b>Им'я кліента:</b> ${clientName}\n`;
    message += `<b>Компанія:</b> ${clientCompany}\n`;
    message += `<b>Мета:</b> ${clientGoal}\n`;
    message += `<b>Текст кліента:</b> ${clientText}\n`;
    message += `<b>Телефон клиента:</b><code> ${clientPhone}</code>`;
    axios
      .post(urlApi, {
        chat_id: chatId,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);
      })
      .finally(() => {});
  };

  return (
    <>
      {success ? (
        <div className="modalWrapper">
          <div className="modalCallbackBody">
            <img
              src="./images/cross.png"
              className="closeModal"
              alt="Close"
              width="24"
              height="24"
              onClick={props.closeModal}
            />
            
              <span className="successAlert">Дані успішно<br/> відправлені. З вами зв'яжеться<br/> менеджер протягом 30 хвилин.</span>
            
          </div>
        </div>
      ) : (
        <div className="modalWrapper">
          <div className="modalCallbackBody">
            <img
              src="./images/cross.png"
              className="closeModal"
              alt="Close"
              width="24"
              height="24"
              onClick={props.closeModal}
            />
            <div className="callbackFormContent">
              <h4> Давай познайомимося</h4>
              <p>
              Будь ласка заповніть форму
              </p>
              <form action="" className="callbackForm" onSubmit={sendAlert}>
                <input
                  type="name"
                  name="name"
                  placeholder="Ім'я"
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                />
                <input
                  type="name"
                  name="name"
                  placeholder="Компания"
                  value={clientCompany}
                  onChange={(event) => setClientCompany(event.target.value)}
                />
                <input
                  type="name"
                  name="name"
                  placeholder="Що плануемо знімати?)"
                  value={clientGoal}
                  onChange={(event) => setClientGoal(event.target.value)}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефону"
                  value={clientPhone}
                  onChange={(event) => setClientPhone(event.target.value)}
                />
                <textarea
                
                  type="name"
                  name="name"
                  placeholder="Що нам потрібно знати?)"
                  value={clientText}
                  onChange={(event) => setClientText(event.target.value)}
                />
                <button className="callbackModalBtn" type="submit">
                  ОТПРАВИТЬ
                </button>
              </form>
              <span className="policyTitle">
                Нажимая кнопку «Отправить», Вы соглашаетесь с<br />
                <p>политикой конфиденциальности</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCallback;
