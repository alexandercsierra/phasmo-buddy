import React, { useState } from "react";
import { ghostMap, ghostInfo } from "../constants";

const GhostReference = () => {
  const [ghost, setGhost] = useState("");

  const handleChange = (e) => {
    setGhost(e.target.value);
  };

  return (
    <div
      style={{
        marginTop: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <select onChange={handleChange}>
        <option>Ghost Info</option>
        {Object.keys(ghostMap).map((ghost) => {
          return <option value={ghost}>{ghost}</option>;
        })}
      </select>

      <p style={{ marginTop: "10px", textAlign: "left", minHeight: "55px" }}>
        {ghostInfo[ghost]}
      </p>
    </div>
  );
};

export default GhostReference;
