import "./styles.css";
import Maps from "./components/Maps";
import Evidence from "./components/Evidence";
import { useState } from "react";

export default function App() {
  const [showEvidence, setShowEvidence] = useState(true);
  const [showMap, setShowMap] = useState(true);
  return (
    <div className="App">
      <div className="container">
        {showEvidence && (
          <div className="evidenceWrapper">
            <Evidence
              setShowEvidence={setShowEvidence}
              showEvidence={showEvidence}
              setShowMap={setShowMap}
              showMap={showMap}
            />
          </div>
        )}
        {showMap && (
          <div style={{ width: "100%" }}>
            <Maps />
          </div>
        )}
      </div>
    </div>
  );
}
