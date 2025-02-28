import { useRef, useState } from "react";
import {
  Property,
  useProperties,
} from "../../../context/PropertyContextProvider";
import "./HouseIcon.scss";

type Props = {
  item: Property;
  mapMarker?: boolean;
};

const HouseIcon = ({ item, mapMarker }: Props) => {
  const total =
    item.technicalAlarms + item.operationalAlarms + item.safetyAlarms;

  const bluePercent = useRef((item.technicalAlarms / total) * 100);
  const orangePercent = useRef(
    (item.operationalAlarms / total) * 100 + bluePercent.current
  );

  const yellowPercent = 100;

  const { setSelected } = useProperties();

  const [viewInfo, setViewInfo] = useState(false);

  return (
    <button
      className={`circle-container ${mapMarker ? "scale" : ""}`}
      style={{
        backgroundImage: `conic-gradient(
            #0e55b2 0% ${bluePercent.current}%, 
            #e57d23 ${bluePercent.current}% ${orangePercent.current}%, 
            #f8e342 ${orangePercent.current}% ${yellowPercent}%
          )`,
      }}
      onClick={() => {
        setSelected(item);
        const modal = document.querySelector(
          ".Modal-background"
        ) as HTMLElement;
        modal.style.display = "flex";
      }}
      onMouseOver={() => setViewInfo(true)}
      onMouseOut={() => setViewInfo(false)}
    >
      <div className="icon-container">
        <img
          className={`${mapMarker && "scale-house"}`}
          src="src/assets/Home.svg"
          alt=""
        />
        {viewInfo && (
          <div className="hover-info-container">
            <p>{item.name}</p>
            <ul className="hover-info-alarmlist">
              <li>Technical: {item.operationalAlarms}</li>
              <li>Operational: {item.operationalAlarms}</li>
              <li>Safety: {item.operationalAlarms}</li>
            </ul>
          </div>
        )}
      </div>
    </button>
  );
};

export default HouseIcon;
