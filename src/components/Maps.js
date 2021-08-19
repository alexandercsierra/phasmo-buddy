import React, { useState } from "react";
import { maps } from "../constants";
import GhostReference from "./GhostReference";

const Maps = () => {
  const [mapInfo, setMapInfo] = useState(maps[0]);
  const mapNames = maps.map((map) => map.name);

  const handleChange = (e) => {
    const newMapInfo = maps.find((map) => map.name === e.target.value);
    setMapInfo(newMapInfo);
  };

  return (
    <div className="mapContainer">
      <div className="mapDiv">
        <div>
          <select
            onChange={handleChange}
            style={{ padding: "5px 10px", marginBottom: "10px" }}
          >
            {mapNames.map((mapName) => {
              return <option value={mapName}>{mapName}</option>;
            })}
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            onClick={() => window.open(mapInfo.url, "_blank")}
            alt="map"
            src={mapInfo.url}
            style={{
              maxWidth: "100%",
              maxHeight: "75vh",
              cursor: "pointer"
            }}
          />
          <a
            href={mapInfo.url}
            style={{
              color: "inherit",
              textDecoration: "none",
              alignSelf: "flex-end",
              margin: "10px 0 0 0"
            }}
          >
            credit: {mapInfo.credit}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maps;
