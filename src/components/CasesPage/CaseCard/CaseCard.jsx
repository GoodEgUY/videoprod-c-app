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
          <p className="caseItemName">{props.name}</p>
          <p className="caseItemTitle">{props.title}</p>
        </div>
      </Link>
    </>
  );
};

export default CaseCard;
