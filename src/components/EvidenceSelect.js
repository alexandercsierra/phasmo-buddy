import { evidenceMap } from "../constants";

const EvidenceSelect = ({ handleEvidenceChange }) => {
  return (
    <div style={{ margin: "10px" }}>
      <form>
        <select onChange={handleEvidenceChange}>
          {Object.keys(evidenceMap).map((evidence) => {
            return <option value={evidence}>{evidence}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default EvidenceSelect;
