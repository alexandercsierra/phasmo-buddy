import React from "react";
import { determineGhosts } from "../util";
import { evidenceMap, ghostMap } from "../constants";

const Results = ({ evidence, notEvidence, setNotEvidence }) => {
  const noNones = Object.values(evidence)?.filter((evi) => evi !== "none");
  const ghostResults = determineGhosts(evidence, notEvidence)
  const isLastGhost = ghostResults?.length === 1
  



  return (
    <div className={`ghostList ${isLastGhost ? "finalResults" : "normalResults"}`}>
      {ghostResults?.map((ghost, i) => {
        const remainingEvidence = noNones.length === 2 ? getRemainingEvidence({ noNones, ghost })[0] : ""
        return (
          <div
            className={`ghostName ${isLastGhost ? "ghostNameLast" : "ghostNameNormal"}`}
            key={i}
          >
            {`${ghost}${
              noNones.length === 2
                ? " - " + remainingEvidence
                : ""
            }`}
          </div>
        );
      })}
    </div>
  );
};

export default Results;

const getRemainingEvidence = ({ noNones, ghost }) => {
  const ghostEvidence = ghostMap[ghost];

  const remainingEvidence = ghostEvidence?.filter(
    (evi) => !noNones?.includes(evi)
  );

  return remainingEvidence;
};
