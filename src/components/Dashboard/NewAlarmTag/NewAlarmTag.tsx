import "./NewAlarmTag.scss";

type Props = {
  newAlarms: number;
};

const NewAlarmTag = ({ newAlarms }: Props) => {
  return (
    <button className="NewAlarmTag">
      <p>{newAlarms}</p>
    </button>
  );
};

export default NewAlarmTag;
