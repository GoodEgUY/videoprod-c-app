import React from "react";
import "./casecard.css";

import { Link } from "react-router-dom";

const CaseCard = (props) => {
  return (
    <>
      <Link key={props.id} to={`/works/${props.urlName}`}>
        <div className="caseItem">
          <div className="caseImage">
            <img src={props.image} className="coverImg" alt="" />
            
          </div>
          <div className="caseItemBottom">
            <div className="caseItemTitleBlock"><p className="caseItemTitle">{props.title}</p></div>
          <div className="caseItemNameBlock"><p className="caseItemName">{props.name}</p></div>
          
          </div>
          
        </div>
      </Link>
    </>
  );
};

export default CaseCard;
