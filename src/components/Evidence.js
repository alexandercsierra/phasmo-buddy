import React, { useState } from "react";
import Results from "./Results";
import EvidenceForm from "./EvidenceForm";
import TitleOptions from "./TitleOptions";

const Evidence = ({ setShowEvidence, showEvidence, setShowMap, showMap }) => {
  const [evidence, setEvidence] = useState({
    1: "none",
    2: "none",
    3: "none"
  });

  return (
    <div>
      <div className="evidenceContainer">
        <TitleOptions
          setShowEvidence={setShowEvidence}
          showEvidence={showEvidence}
          setShowMap={setShowMap}
          showMap={showMap}
        />
        <EvidenceForm evidenceState={evidence} setEvidenceState={setEvidence} />
        <Results evidence={evidence} />
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
