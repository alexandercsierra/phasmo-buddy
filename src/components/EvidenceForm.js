import React, { useState } from "react";
import { evidenceMap, evidenceVars } from "../constants";
import { calcButtons } from "../util";
import Button from "./Button";

const EvidenceForm = ({ setEvidenceState, evidenceState }) => {
  const evidence = Object.keys(evidenceMap).filter((evi) => evi !== "none");
  const [checkboxes, setCheckboxes] = useState({
    fingerprints: false,
    emf: false,
    writing: false,
    freezing: false,
    spirit_box: false,
    orbs: false
  });

  const [numChecked, setNumChecked] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    let newNumChecked = numChecked;
    console.log(checkboxes[e.target.name]);
    if (checkboxes[e.target.name]) {
      newNumChecked -= 1;
    } else {
      newNumChecked += 1;
    }
    setNumChecked(newNumChecked);
    const newEvidence = {
      ...checkboxes,
      [e.target.name]: !checkboxes[e.target.name]
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
    <div className="evidenceFormContainer">
      {evidence.map((evi) => {
        const isDisabled = numChecked >= 3 && !checkboxes[evi];
        const buttons = calcButtons({ currentEvidence: evidenceState });
        const shouldDisable = buttons.includes(evi);
        return (
          <div>
            <Button
              className={checkboxes[evi] ? "selectedButton" : "button"}
              // background={checkboxes[evi] ? "#28d326" : "#dee5e8"}
              isDisabled={isDisabled || shouldDisable}
              onClick={handleChange}
              text={evi}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EvidenceForm;
