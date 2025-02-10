import { useRef } from "react";
import { Property, useProperties } from "../../context/PropertyContextProvider";
import "./Dashboard.scss";

const HouseIcon = ({ item }: { item: Property }) => {
  const total =
    item.technicalAlarms + item.operationalAlarms + item.safetyAlarms;

  const bluePercent = useRef((item.technicalAlarms / total) * 100);
  const orangePercent = useRef(
    (item.operationalAlarms / total) * 100 + bluePercent.current
  );

  const yellowPercent = 100;

  const { setSelected } = useProperties();

  return (
    <button
      className="circle-container"
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
    >
      <div className="icon-container">
        <img src="src/assets/Home.svg" alt="" className="size-18 mb-2" />
      </div>
    </button>
  );
};

export default HouseIcon;
