import "./AboutCard.scss";
import { CiShare1 } from "react-icons/ci";
import { useProperties } from "../../context/PropertyContextProvider";

const AboutCard = () => {
  const { selected } = useProperties();

  let totalAlarms = 0;
  if (selected) {
    totalAlarms =
      selected?.operationalAlarms +
      selected?.safetyAlarms +
      selected?.technicalAlarms;
  }

  return (
    <div className="AboutCard">
      <div className="about">
        <h2>{selected?.name}</h2>
        <p>{selected?.streetAddress}</p>
        <p>{selected?.postalAddress}</p>
        <p className="link">
          WebPort <CiShare1 />
        </p>
      </div>
      <div className="alarms">
        <div className="total-alarms">
          <span className="title">
            <b>New</b> Alarms
          </span>
          <span className="total">{totalAlarms}</span>
        </div>
        <div className="category-alarms">
          <div className="category-alarm">
            <img src="src\assets\technical.svg" alt="" />
            <p>Technical</p>
            <p>{selected?.technicalAlarms}</p>
          </div>
          <div className="category-alarm">
            <img src="src\assets\Operational.svg" alt="" />
            <p>Operational</p>
            <p>{selected?.operationalAlarms}</p>
          </div>
          <div className="category-alarm">
            <img src="src\assets\Saftey.svg" alt="" />
            <p>Safety</p>
            <p>{selected?.safetyAlarms}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
