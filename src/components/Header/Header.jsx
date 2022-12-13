import React from "react";
import "./header.css"
import { useEffect, useState } from "react";




const Header = () => {
    const [back, setBack] = useState(false);
    const screenBody = document.getElementsByClassName('mainScreen')
    useEffect(() => {
        window.addEventListener('scroll' ,() => {
            if(screenBody.scrollY > 200) {
                console.log("test");
                setBack(true);
            } else {
                console.log("test34");
                setBack(false);
            }
        })
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