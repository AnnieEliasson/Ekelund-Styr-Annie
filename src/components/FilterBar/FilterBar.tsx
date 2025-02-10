import "./FilterBar.scss";

const FilterBar = () => {
  const alarms = [
    { name: "Technical Alarms", symbol: "./src/assets/technical.svg" },
    { name: "Operational Alarms", symbol: "src/assets/Operational.svg" },
    { name: "Safety Alarms", symbol: "src/assets/Saftey.svg" },
    { name: "Device Alarms", symbol: "src/assets/device.svg" },
  ];

  return (
    <div className="FilterBar">
      <ul className="filter-nav-list">
        <li className="filter-btns">Filters</li>
        {alarms.map((alarm) => {
          return (
            <li className="filter-btns">
              <img src={alarm.symbol} alt="" />
              {alarm.name}
              <ul className="dropdown">
                <li className="filter-option">
                  <input type="checkbox" name="" id="test1" />
                  <label htmlFor="test1">test1</label>
                </li>
                <li className="filter-option">
                  <input type="checkbox" name="" id="test2" />
                  <label htmlFor="test2">test2</label>
                </li>
                <li className="filter-option">
                  <input type="checkbox" name="" id="test3" />
                  <label htmlFor="test3">test3</label>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBar;
