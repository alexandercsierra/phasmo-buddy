import React, { useState } from "react";
import { evidenceMap, evidenceVars } from "../constants";
import { calcButtons } from "../util";
import Button from "./Button";
import { defaultEvidenceState } from "../constants";
import InfoButton from "./InfoButton";

const EvidenceForm = ({ setEvidenceState, evidenceState, notEvidence, setNotEvidence}) => {
  const defaultCheckboxes = {
    fingerprints: false,
    emf: false,
    writing: false,
    freezing: false,
    spirit_box: false,
    orbs: false,
    dots: false
  }
  const evidence = Object.keys(evidenceMap).filter((evi) => evi !== "none");
  const [checkboxes, setCheckboxes] = useState(defaultCheckboxes);
  const [showInfo, setShowInfo] = useState(false)
  const [numChecked, setNumChecked] = useState(0);


  const handleChange = (e) => {
    e.preventDefault();


    let newNumChecked = numChecked;
    if (checkboxes[e.target.name]) {
      newNumChecked -= 1;
    } else if(checkboxes[e.target.name] === false) {
      newNumChecked += 1;
    }
    setNumChecked(newNumChecked);

    let newBoxState;

    if(checkboxes[e.target.name]){
      newBoxState = null;
      setNotEvidence([...notEvidence, e.target.name])
    }
    if(checkboxes[e.target.name] === null){
      newBoxState = false
      if(notEvidence.includes(e.target.name) ){
        setNotEvidence(notEvidence.filter(evi => evi !== e.target.name))
      }
    }
    if(checkboxes[e.target.name] === false){
      newBoxState = true;
      if(notEvidence.includes(e.target.name) ){
        setNotEvidence(notEvidence.filter(evi => evi !== e.target.name))
      }
    }


    const newEvidence = {
      ...checkboxes,
      [e.target.name]: newBoxState
    };
    setCheckboxes(newEvidence);

    let updatedEvidence = [];
    for (let evidence in newEvidence) {
      if (newEvidence[evidence]) {
        updatedEvidence.push(evidence);
      }
    }

    setEvidenceState({
      1: updatedEvidence[0] || "none",
      2: updatedEvidence[1] || "none",
      3: updatedEvidence[2] || "none"
    });
  };


  return (
    <div >
      <InfoButton showInfo={showInfo} setShowInfo={setShowInfo} />
      <div className="evidenceFormContainer">
        {evidence.map((evi, i) => {
          const isDisabled = numChecked >= 3 && !checkboxes[evi]
          const buttons = calcButtons({ currentEvidence: evidenceState });
          const shouldDisable = buttons.includes(evi);
          return (
            <div key={`${evi}-${i}`}>
              <Button
                className={checkboxes[evi] 
                  ? "selectedButton" 
                  : 
                    checkboxes[evi] === null 
                      ? "manuallyDisabled" 
                      : "button"}
                isDisabled={isDisabled || shouldDisable}
                onClick={handleChange}
                text={evi}
              />
            </div>
          );
        })}
      </div>
      <div>
        <p 
          style={{textDecoration:'underline', cursor:'pointer'}}
          onClick={()=>{
            setNumChecked(0)
            setCheckboxes(defaultCheckboxes)
            setEvidenceState(defaultEvidenceState)
            setNotEvidence([])
          }}
        >reset</p>
      </div>
    </div>
  );
};

export default EvidenceForm;
