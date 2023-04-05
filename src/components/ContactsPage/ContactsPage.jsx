import React from "react";
import "./contactspage.css";

const ContactsPage = () => {
  return (
    <div className="contacts">
      
        <div className="contactsTable">
          <div className="contactsLogo">
            <p>palay</p>
          </div>
          <div className="contactsRow">
            <div className="contactBlock"><p>test</p></div>
          </div>
          <div className="contactsRow">
            <div className="contactBlock"><p>test</p></div>
            <div className="contactsTd">
              <div className="contactBlockPhone">
                <p className="contactsPhone">ТЕЛЕФОН</p>
              </div>
              <div className="contactBlockRight">
                <p className="contactsPhone">+380676091891</p>
              </div>
            </div>
          </div>
          <div className="contactsRow">
            <div className="contactBlock"><p>test</p></div>
            <div className="contactsTd">
              <div className="contactBlockPost">
                <p className="contactsPhone">ПОШТА</p>
              </div>
              <div className="contactBlockLeft">
                <p className="contactsPhone">palayVideoProd@agency</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};
export default ContactsPage;
