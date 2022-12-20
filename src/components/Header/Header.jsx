import React from "react";
import "./header.css"
import { useEffect, useState } from "react";




const Header = () => {
    const [back,setBack] = useState(false);
    const scrollCheck = () => {
        if(window.scrollY > window.innerHeight) {
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