import "./DashboardItem.scss";
import HouseIcon from "../HouseIcon/HouseIcon";
import NewAlarmTag from "../NewAlarmTag/NewAlarmTag";

type Props = {
  searchResult: {
    name: string;
    streetAddress: string;
    postalAddress: string;
    technicalAlarms: number;
    operationalAlarms: number;
    safetyAlarms: number;
    newAlarms: number;
  }[];
};

const DashboardItem = ({ searchResult }: Props) => {
  return (
    <>
      {searchResult.map((item) => {
        return (
          <div key={item.name} className="dashboard-item">
            {item.newAlarms > 0 && <NewAlarmTag newAlarms={item.newAlarms} />}

            <div className="info">
              <h2>{item.name}</h2>
              <p className="adress">{item.streetAddress}</p>
              <p className="adress">{item.postalAddress}</p>
              <ul className="alarm-list">
                <li>
                  Total alarms:{" "}
                  {item.safetyAlarms +
                    item.technicalAlarms +
                    item.operationalAlarms}
                </li>
                <li className="safety">
                  Safety: <span>{item.safetyAlarms}</span>
                </li>
                <li className="technical">
                  Technical: <span>{item.technicalAlarms}</span>
                </li>
                <li className="operational">
                  Operational: <span>{item.operationalAlarms}</span>
                </li>
              </ul>
            </div>
            <HouseIcon item={item} />
          </div>
        );
      })}
    </>
  );
};

export default DashboardItem;
