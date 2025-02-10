import "./Dashboard.scss";

type Props = {
  newAlarms: number;
};

const NewAlarmTag = ({ newAlarms }: Props) => {
  return (
    <div className="NewAlarmTag">
      <p>{newAlarms}</p>
    </div>
  );
};

export default NewAlarmTag;
