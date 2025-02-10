import { useState } from "react";
import "./SideBar.scss";
import {
  RiMailUnreadLine,
  RiMailLine,
  RiSettings5Line,
  RiQuestionLine,
} from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import Notifications from "./Notifications/Notifications";

const SideBar = () => {
  const [newNotification, setNewNotification] = useState(true);

  const toggleNotificationWindow = () => {
    const notificationWindow = document.querySelector(
      ".Notifications"
    ) as HTMLElement;

    if (notificationWindow.style.marginLeft == "120px") {
      notificationWindow.style.marginLeft = "-500px";
    } else {
      notificationWindow.style.marginLeft = "120px";
    }
  };

  return (
    <>
      <Notifications />
      <div className="SideBar">
        <div className="top-container">
          <img src="src\components\SideBar\image.png" alt="logo" />
          <br />
          <div className="icon-btn" onClick={() => toggleNotificationWindow()}>
            {newNotification ? <RiMailUnreadLine /> : <RiMailLine />}
            <p style={{ fontSize: 12 }}>Notifications</p>
          </div>
          <br />
          <div className="icon-btn">
            <RiSettings5Line />
            <p style={{ fontSize: 12 }}>Settings</p>
          </div>
        </div>
        <div className="bottom-container">
          <RiQuestionLine />
          <p style={{ fontSize: 12 }}>Support</p>
          <br />
          <div className="user">
            <FaUserCircle />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
