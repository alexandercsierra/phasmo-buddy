import React, { useState } from "react";
import Results from "./Results";
import EvidenceForm from "./EvidenceForm";
import TitleOptions from "./TitleOptions";
import { defaultEvidenceState } from "../constants";
import NameObjectives from "./NameObjectives";
import GhostReference from "./GhostReference";

const Evidence = ({ setShowEvidence, showEvidence, setShowMap, showMap, ghostInfo, setGhostInfo }) => {
  const [evidence, setEvidence] = useState(defaultEvidenceState);
  const [notEvidence, setNotEvidence] = useState([])


  return (
    <div>
        <div className="evidenceContainer centered column">
          <TitleOptions
            setShowEvidence={setShowEvidence}
            showEvidence={showEvidence}
            setShowMap={setShowMap}
            showMap={showMap}
          />
          <EvidenceForm evidenceState={evidence} setEvidenceState={setEvidence} notEvidence={notEvidence} setNotEvidence={setNotEvidence} />
          <Results evidence={evidence} notEvidence={notEvidence} setNotEvidence={setNotEvidence} setGhostInfo={setGhostInfo}/>
          <GhostReference initialGhost={ghostInfo}/>
          <NameObjectives/>
          <div style={{ margin: "20px auto" }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSenm0lx8nl9-Is6lJzMvpfLNISIUZrSzmn4ufLaoJyh1sSBEQ/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "inherit"
              }}
            >
              Got feedback?
            </a>
          </div>
        </div>
    </div>
  );
};

export default Evidence;
