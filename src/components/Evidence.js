import React, { useState } from "react";
import Results from "./Results";
import EvidenceForm from "./EvidenceForm";
import TitleOptions from "./TitleOptions";
import { defaultEvidenceState } from "../constants";
import NameObjectives from "./NameObjectives";
import GhostReference from "./GhostReference";
import GenericDialog from "./GenericDialog";

const Evidence = ({
  setShowEvidence,
  showEvidence,
  setShowMap,
  showMap,
  ghostInfo,
  setGhostInfo,
}) => {
  const [evidence, setEvidence] = useState(defaultEvidenceState);
  const [notEvidence, setNotEvidence] = useState([]);

  return (
    <div style={{ padding: "25px" }}>
      <div className="evidenceContainer centered column">
        <TitleOptions
          setShowEvidence={setShowEvidence}
          showEvidence={showEvidence}
          setShowMap={setShowMap}
          showMap={showMap}
        />
        <EvidenceForm
          evidenceState={evidence}
          setEvidenceState={setEvidence}
          notEvidence={notEvidence}
          setNotEvidence={setNotEvidence}
        />
        <Results
          evidence={evidence}
          notEvidence={notEvidence}
          setNotEvidence={setNotEvidence}
          setGhostInfo={setGhostInfo}
          ghostInfo={ghostInfo}
        />
        <NameObjectives />
      </div>
    </div>
  );
};

export default Evidence;
