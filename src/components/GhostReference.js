import React, { useState, useEffect} from "react";
import { ghostMap, ghostInfo } from "../constants";
import { capitalize } from '../util'

const GhostReference = ({initialGhost=""}) => {
  const [ghost, setGhost] = useState(initialGhost);

  const handleChange = (e) => {
    setGhost(e.target.value);
  };

  useEffect(()=>{
    setGhost(initialGhost)
  },[initialGhost])

  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <select onChange={handleChange} value={ghost}>
        <option>Ghost Info</option>
        {Object.keys(ghostMap).map((ghost, i) => {
          return <option key={`${ghost}-${i}`} value={ghost}>{capitalize(ghost)}</option>;
        })}
      </select>

      <p style={{ marginTop: "10px", textAlign: "left", minHeight: "55px", marginBottom: '0'}}>
        {ghostInfo[ghost]}
      </p>
    </div>
  );
};

export default GhostReference;
