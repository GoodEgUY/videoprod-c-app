import React from "react";
import "./casecard.css"
import { NavLink } from "react-router-dom";




const CaseCard = (cardName, title) => {
    
    
    return (
        <div className="cardScreenBody">
            <h2>{cardName}</h2>
        </div>
    );
} 

export default CaseCard;