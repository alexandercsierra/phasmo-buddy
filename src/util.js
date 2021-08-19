import { evidenceMap, ghostMap, allEvidence } from "./constants";

export const determineGhosts = (evidence) => {
  const eviArray = Object.values(evidence);
  const noNones = eviArray?.filter((evi) => evi !== "none");
  if (noNones.length === 0) {
    return evidenceMap["none"];
  }

  if (noNones?.length === 1) {
    return evidenceMap[noNones[0]];
  }

  const possibleGhosts = [];

  noNones.forEach((evidence) => {
    possibleGhosts.push(evidenceMap[evidence]);
  });

  const ghostMap = {};
  const flatPossibleGhosts = possibleGhosts.flat();

  flatPossibleGhosts.forEach((ghost) => {
    if (ghostMap[ghost]) {
      ghostMap[ghost] += 1;
    } else {
      ghostMap[ghost] = 1;
    }
  });

  const finalGhosts = [];

  for (let ghost in ghostMap) {
    if (ghostMap[ghost] === noNones.length) {
      finalGhosts.push(ghost);
    }
  }

  return finalGhosts;
};

//figure out which to disable based on current evidence
export const calcButtons = ({ currentEvidence }) => {
  const filteredEvidence = Object.values(currentEvidence).filter(
    (evi) => evi !== "none"
  );
  if (!filteredEvidence.length) return [];

  const evidenceArrs = Object.values(ghostMap);

  const possibleEvidenceDict = [];

  if (filteredEvidence.length === 1) {
    evidenceArrs.forEach((arr) => {
      if (arr.includes(filteredEvidence[0])) {
        possibleEvidenceDict.push(arr);
      }
    });

    const flattened = possibleEvidenceDict.flat();
    // const filteredFlat = flattened.filter((evi) => evi !== filteredEvidence[0]);
    const setOfEvidence = new Set(flattened);

    return allEvidence.filter((evi) => !setOfEvidence.has(evi));
  } else if (filteredEvidence.length === 2) {
    evidenceArrs.forEach((arr) => {
      if (
        arr.includes(filteredEvidence[0]) &&
        arr.includes(filteredEvidence[1])
      ) {
        possibleEvidenceDict.push(arr);
      }
    });

    const flattened = possibleEvidenceDict.flat();
    const setOfEvidence = new Set(flattened);

    return allEvidence.filter((evi) => !setOfEvidence.has(evi));
  } else if (filteredEvidence.length === 3) {
    evidenceArrs.forEach((arr) => {
      if (
        arr.includes(filteredEvidence[0]) &&
        arr.includes(filteredEvidence[1]) &&
        arr.includes(filteredEvidence[2])
      ) {
        possibleEvidenceDict.push(arr);
      }
    });

    const flattened = possibleEvidenceDict.flat();

    const setOfEvidence = new Set(flattened);

    return allEvidence.filter((evi) => !setOfEvidence.has(evi));
  }
};
