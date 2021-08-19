import React from "react";
import { determineGhosts } from "../util";
import { evidenceMap, ghostMap } from "../constants";

const Results = ({ evidence }) => {
  const noNones = Object.values(evidence)?.filter((evi) => evi !== "none");
  const ghostResults = determineGhosts(evidence)
  const isLastGhost = ghostResults?.length === 1

  return (
    <div className={`ghostList ${isLastGhost ? "finalResults" : "normalResults"}`}>
      {ghostResults?.map((ghost, i) => {
        return (
          <div
            className={`ghostName ${isLastGhost ? "ghostNameLast" : "ghostNameNormal"}`}
            key={i}
          >
            {`${ghost}${
              noNones.length === 2
                ? " - " + getRemainingEvidence({ noNones, ghost })
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
  console.log({ noNones, ghost });
  const ghostEvidence = ghostMap[ghost];

  const remainingEvidence = ghostEvidence?.filter(
    (evi) => !noNones?.includes(evi)
  );

  return remainingEvidence;
};
