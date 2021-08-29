import React, { useState } from "react";
import Results from "./Results";
import EvidenceForm from "./EvidenceForm";
import TitleOptions from "./TitleOptions";
import { defaultEvidenceState } from "../constants";
import NameObjectives from "./NameObjectives";
import GhostReference from "./GhostReference";
import GenericDialog from "./GenericDialog";

const Evidence = ({ setShowEvidence, showEvidence, setShowMap, showMap, ghostInfo, setGhostInfo }) => {
  const [evidence, setEvidence] = useState(defaultEvidenceState);
  const [notEvidence, setNotEvidence] = useState([])
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const resetAll = () => {
    setEvidence(defaultEvidenceState)
    setGhostInfo("")
  }


  return (
    <div style={{padding:'25px'}}>
        <div className="evidenceContainer centered column">
          <TitleOptions
            setShowEvidence={setShowEvidence}
            showEvidence={showEvidence}
            setShowMap={setShowMap}
            showMap={showMap}
          />
          <EvidenceForm evidenceState={evidence} setEvidenceState={setEvidence} notEvidence={notEvidence} setNotEvidence={setNotEvidence} />
          <Results evidence={evidence} notEvidence={notEvidence} setNotEvidence={setNotEvidence} setGhostInfo={setGhostInfo} ghostInfo={ghostInfo}/>
          {/* <GhostReference initialGhost={ghostInfo}/> */}
          <NameObjectives/>
          {/* <button className="button" onClick={resetAll}>Reset all</button> */}
          {/* <NameObjectives/>
           */}
          {/* <div style={{ margin: "20px auto" }}>
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
          </div> */}
        </div>
    </div>
  );
};

export default Evidence;
