import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="footerNav">
                <p>Напишіть нам про свій проект:</p>
                <div className="postButton">test@test.test</div>
                <p>Або подзвоніть:</p>
                <p className="footerText">+380000000000</p>
            </div>
        </footer>
    );
} 
export default Footer;