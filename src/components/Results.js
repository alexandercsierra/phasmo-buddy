import React from "react";
import { determineGhosts } from "../util";
import { evidenceMap, ghostMap } from "../constants";

const Results = ({ evidence }) => {
  const noNones = Object.values(evidence)?.filter((evi) => evi !== "none");
  return (
    <div className="ghostList">
      {determineGhosts(evidence).map((ghost, i) => {
        return (
          <div
            key={i}
            style={{
              margin: "5px",
              width: "100px",
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "flex-start"
            }}
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
