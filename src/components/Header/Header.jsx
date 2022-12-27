import React from "react";
import "./header.css"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";




const Header = () => {
    const [back,setBack] = useState(false);
    const scrollCheck = () => {
        if(window.scrollY > window.innerHeight-150) {
                setBack(true);
                
            } else {
                setBack(false);
                
            } 
            
    }

    useEffect (() => {
        window.addEventListener('scroll', scrollCheck)
    },[])
  
    
    return (
        <header className={back ? "header back" : "header"}>
            <NavLink to="/"><p className="logo">Якесь лого!</p></NavLink>
            <div className={back ? "headerNav navRight" : "headerNav"}>
                <NavLink to="/works"><p className="headerNavItem">роботи</p></NavLink>
                <p className="headerNavItem">послуги</p>
                <p className="headerNavItem">команда</p>
                <p className="headerNavItem">контакти</p>
                <p></p>
            </div>
        </header>
    );
} 

export default Header;