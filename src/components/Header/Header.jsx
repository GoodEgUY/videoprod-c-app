import React from "react";
import "./header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p className="logo">Якесь лого!</p>
      </NavLink>
      <div className="headerNav">
        <NavLink to="/works">
          <p className="headerNavItem">роботи</p>
        </NavLink>
        <p className="headerNavItem">послуги</p>
        <p className="headerNavItem">команда</p>
        <p className="headerNavItem">контакти</p>
        <p></p>
      </div>
    </header>
  );
};

export default Header;
