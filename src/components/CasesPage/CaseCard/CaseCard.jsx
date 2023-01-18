import React from "react";
import "./casecard.css";
import caserouter from "../../../assests/config.routes/casecards/casecards.json"


const CaseCard = (props) => {
  
  
  
 
  const openCasePage = () => {
    let caseInfo = caserouter.find(project => project.key === props.id )
    if (caseInfo === undefined) {
      caseInfo = "0"
    } 
    console.log(props.id)
    alert(caseInfo.name)
  }
  return (
    <div className="caseItem" onClick={() => openCasePage()}>
      <div className="caseImage">
        <img src={props.image} className="coverImg" alt="" />
      </div>
      <p className="caseItemName">{props.name}</p>
      <p className="caseItemTitle">{props.title}</p>
    </div>
  );
};

export default CaseCard;
