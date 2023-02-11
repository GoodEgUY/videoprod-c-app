import React from "react";
import "./header.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import burgerIcon from "./burgerIcon.png";
import crossIcon from "./crossIcon.png";
const Header = () => {
  const [back, setBack] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollCheck = () => {
    if (window.scrollY > 150) {
      setBack(true);
    } else {
      setBack(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollCheck);
  }, []);

  return (
    <>
      {back ? (
        <div className="burgerHeader">
          <div
            className={isOpen ? "close" : "btnBurger"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? crossIcon : burgerIcon}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className={isOpen ? "burgerWrapper" : "close"} onClick={() => setIsOpen(!isOpen)}>
            <div className={isOpen ? "headerInner" : "close"}>
              <div className="mobileHeaderNav backHeader">
                <div
                  className="crossBurgerMenu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img src={crossIcon} alt="" />
                </div>
                <NavLink to="/">
                  <p className="logo">PALAY</p>
                </NavLink>
                <NavLink to="/works">
                  <p className="mobileHeaderNavItem">роботи</p>
                </NavLink>
                <p className="mobileHeaderNavItem">послуги</p>
                <p className="mobileHeaderNavItem">команда</p>
                <p className="mobileHeaderNavItem">контакти</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <header className="header">
          <NavLink to="/">
            <p className="logo">PALAY</p>
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
      )}
    </>
  );
};

export default Header;
