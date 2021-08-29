import Button from "./Button";
import GhostReference from "./GhostReference";

const TitleOptions = ({
  setShowEvidence,
  showEvidence,
  setShowMap,
  showMap
}) => {
  return (
    <div>
      <h1>👻 Phasmo Buddy</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <div>
          <Button
            onClick={() => setShowEvidence(!showEvidence)}
            text={showEvidence ? "hide evidence" : "show evidence"}
          />
          <Button
            onClick={() => setShowMap(!showMap)}
            text={showMap ? "hide map" : "show map"}
          />
        </div> */}
        <GhostReference />
      </div>
    </div>
  );
};

export default TitleOptions;
