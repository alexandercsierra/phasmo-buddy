import "./styles.css";
import Maps from "./components/Maps";
import Evidence from "./components/Evidence";
import { useState } from "react";
import PhotoGuide from "./components/PhotoGuide";
import NameObjectives from "./components/NameObjectives";
import AlertModal from "./components/AlertModal";

export default function App() {
  const [ghostInfo, setGhostInfo] = useState("");

  return (
    <div className="App w100">
      <div className="container w100">
        <div className="centered column hideOnMobile">
          <div style={{ display: "flex", marginTop: "20px" }} className="w100">
            <div
              className="evidenceWrapper"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <AlertModal />
              <Evidence ghostInfo={ghostInfo} setGhostInfo={setGhostInfo} />
            </div>
            <div
              style={{
                marginLeft: "10px",
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Maps />
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }} className="w100">
            {/* <div className="evidenceWrapper centered" style={{ width: '330px', padding: '25px', marginRight: "10px"}}>
                <NameObjectives/>
              </div> */}
            <div
              className="centered evidenceWrapper hideOnMobile"
              style={{ width: "365px" }}
            >
              <PhotoGuide />
            </div>
          </div>
        </div>

        <div className="centered column showOnMobile">
          <div className=" centered column">
            <div className="centered" style={{ marginBottom: "10px" }}>
              <Evidence ghostInfo={ghostInfo} setGhostInfo={setGhostInfo} />
            </div>
            <div className="evidenceWrapper centered" style={{ padding: 0 }}>
              <Maps />
            </div>
          </div>
          {/* <div className="evidenceWrapper centered" style={{ width: '350px', padding: '25px', margin: '10px auto'}}>
                <NameObjectives/>
              </div> */}
          <div
            className="centered evidenceWrapper"
            style={{ width: "95%", margin: "10px auto" }}
          >
            <PhotoGuide />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div className="w100 footer" style={{ boxSizing: "border-box" }}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSenm0lx8nl9-Is6lJzMvpfLNISIUZrSzmn4ufLaoJyh1sSBEQ/viewform?usp=sf_link"
        target="_blank"
        rel="noreferrer"
        style={{
          color: "inherit",
        }}
      >
        Got feedback?
      </a>
    </div>
  );
};
