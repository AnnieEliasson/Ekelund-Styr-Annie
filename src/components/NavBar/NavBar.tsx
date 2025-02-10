import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const navLinks = ["Alarm", "History Log"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="NavBar">
      <ul className="NavBar-list">
        {navLinks.map((link, index) => (
          <li
            key={link}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
