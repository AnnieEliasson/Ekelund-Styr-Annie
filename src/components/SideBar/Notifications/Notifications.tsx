import "./Notifications.scss";

const Notifications = () => {
  return (
    <div className="Notifications">
      <div className="notification-header">
        <p>Notification</p>
        <button className="new-tag">3 New</button>
        <button className="mark-as-read">Mark all as Read</button>
      </div>
    </div>
  );
};

export default Notifications;
