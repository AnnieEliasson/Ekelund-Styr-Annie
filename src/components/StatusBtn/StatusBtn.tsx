import { useState } from "react";
import "./StatusBtn.scss";

type Props = {
  type: "clickable" | "active" | "acknowledged";
};

const StatusBtn = ({ type }: Props) => {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  if (type === "clickable") {
    return (
      <div
        className={`StatusBtn ${isAcknowledged ? "acknowledged" : ""}`}
        onClick={() => setIsAcknowledged((prev) => !prev)}
      >
        <div
          className="dot"
          style={{ backgroundColor: isAcknowledged ? "white" : "green" }}
        ></div>
        <span>{isAcknowledged ? "Acknowledged" : "Active"}</span>
      </div>
    );
  } else if (type === "active") {
    return (
      <div className="StatusBtn">
        <div className="dot" style={{ backgroundColor: "green" }}></div>
        <span>Active</span>
      </div>
    );
  } else if (type === "acknowledged") {
    return (
      <div className="StatusBtn acknowledged">
        <div className="dot" style={{ backgroundColor: "white" }}></div>
        <span>Acknowledged</span>
      </div>
    );
  }

  return null;
};

export default StatusBtn;
