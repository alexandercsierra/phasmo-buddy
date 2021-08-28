import React from "react";
import { determineGhosts, transformName, capitalize} from "../util";
import { evidenceMap, ghostMap } from "../constants";

const Results = ({ evidence, notEvidence, setNotEvidence, setGhostInfo }) => {
  const noNones = Object.values(evidence)?.filter((evi) => evi !== "none");
  const ghostResults = determineGhosts(evidence, notEvidence)
  const isLastGhost = ghostResults?.length === 1
  
  const handleGhostClick = (ghost) => {
    console.log({ghost})
    setGhostInfo(ghost)

  }



  return (
    <div className={`ghostList ${isLastGhost ? "finalResults" : "normalResults"}`}>
      {ghostResults?.map((ghost, i) => {
        const remainingEvidence = noNones.length === 2 ? getRemainingEvidence({ noNones, ghost })[0] : ""

        const transformedName = transformName(remainingEvidence, true)
        return (
          <div
            className={`ghostName ${isLastGhost ? "ghostNameLast" : "ghostNameNormal"}`}
            key={i}
            onClick={()=>handleGhostClick(ghost)}
          >
            {`${capitalize(ghost)}${
              noNones.length === 2
                ? " - " + (transformedName === "emf" ? transformedName.toUpperCase() : transformedName)
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
