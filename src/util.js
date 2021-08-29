import { evidenceMap, ghostMap, allEvidence } from "./constants";

export const capitalize = (str)=> {
  return str[0].toUpperCase() + str.substring(1, str.length)
}

export const transformName = (name, noEmoji=false) => {
  if(name.includes('spirit')){
    return noEmoji ? "spirit box" : "📻 spirit box"
  }

  if(name.includes('dots')){
    return noEmoji ? "D.O.T.S." : "🟢 D.O.T.S."
  }

  return name
}

const removeNotEvidence = (notEviList, possibleGhosts) => {
  
  let ghosts = []
  possibleGhosts?.forEach(ghost=>{
    notEviList?.forEach((evi)=>{
        if(ghostMap[ghost].includes(evi) && !ghosts.includes(ghost)){
          ghosts.push(ghost)
        }

    })
  })

  const filteredGhosts = possibleGhosts?.filter(ghost=>!ghosts.includes(ghost))

  return filteredGhosts;
}

export const determineGhosts = (evidence, notEvidence) => {

  const eviArray = Object.values(evidence);
  const noNones = eviArray?.filter((evi) => evi !== "none");
  if (noNones.length === 0) {
    return removeNotEvidence(notEvidence, evidenceMap["none"])
    // return evidenceMap["none"];
  }

  if (noNones?.length === 1) {
    return removeNotEvidence(notEvidence, evidenceMap[noNones[0]])
    // return evidenceMap[noNones[0]];
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

  return removeNotEvidence(notEvidence, finalGhosts)

  // return finalGhosts;
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
