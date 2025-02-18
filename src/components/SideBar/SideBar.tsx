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

    if (notificationWindow.style.marginLeft == "100px") {
      notificationWindow.style.marginLeft = "-500px";
    } else {
      notificationWindow.style.marginLeft = "100px";
    }
  };

  return (
    <>
      <Notifications />
      <div className="SideBar">
        <div className="top-container">
          <img
            src="https://cdn.prod.website-files.com/6391a37849aaab9664c88b08/6399deb31cea5f52010cf608_ekelund_logo-symbol_1.svg"
            alt="logo"
          />
          <br />
          <button
            className="icon-btn"
            onClick={() => toggleNotificationWindow()}
          >
            {newNotification ? (
              <span>
                <RiMailUnreadLine />
              </span>
            ) : (
              <span>
                <RiMailLine />
              </span>
            )}
            <p style={{ fontSize: 12 }}>Notifications</p>
          </button>
          <br />
          <button className="icon-btn">
            <span>
              <RiSettings5Line />
            </span>
            <p style={{ fontSize: 12 }}>Settings</p>
          </button>
        </div>
        <div className="bottom-container">
          <RiQuestionLine />
          <p style={{ fontSize: 12 }}>Support</p>
          <br />
          <button className="user">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
