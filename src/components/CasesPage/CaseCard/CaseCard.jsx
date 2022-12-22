import React from "react";
import "./casecard.css";

const CaseCard = (props) => {
  return (
    <div className="caseItem">
      <div className="caseImage">
        <img src={props.image} className="coverImg" alt="" />
      </div>
      <p className="caseItemName">{props.name}</p>
      <p className="caseItemTitle">{props.title}</p>
    </div>
  );
};

export default CaseCard;
