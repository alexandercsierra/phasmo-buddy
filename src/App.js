import "./styles.css";
import Maps from "./components/Maps";
import Evidence from "./components/Evidence";
import { useState } from "react";
import PhotoGuide from "./components/PhotoGuide";

export default function App() {
  const [showEvidence, setShowEvidence] = useState(true);
  const [showMap, setShowMap] = useState(true);
  return (
    <div className="App">
      <div className="container">
        {showEvidence && (
          <div className="centered column">
            <div className="evidenceWrapper">
              <Evidence
                setShowEvidence={setShowEvidence}
                showEvidence={showEvidence}
                setShowMap={setShowMap}
                showMap={showMap}
              />
            </div>
            <div className="centered evidenceWrapper hideOnMobile" style={{marginTop:'20px'}}>
              <PhotoGuide/>
            </div>
          </div>
        )}
        {showMap && (
          <div className="centered column">
            <div className="w100 centered column">
              <Maps />
            </div>
            <div className="centered evidenceWrapper showOnMobile" style={{marginTop:'20px'}}>
              <PhotoGuide/>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
