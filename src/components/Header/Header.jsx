import React from "react";
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <p className="logo">Якесь лого!</p>
            <div className="headerNav">
                <p className="headerNavItem">роботи</p>
                <p className="headerNavItem">контакти</p>
                <p className="headerNavItem">команда</p>
                <p className="headerNavItem">вакансії</p>
                <p></p>
            </div>
        </header>
    );
} 
export default Header;