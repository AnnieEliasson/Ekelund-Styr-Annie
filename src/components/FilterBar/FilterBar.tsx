import "./FilterBar.scss";
import { alarms } from "../../testData";
import { useState } from "react";

const FilterBar = () => {
  const [choosenFilters, setChoosenFilters] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedItemId = e.target.id;
    if (!clickedItemId) return;

    setChoosenFilters((prevFilters) =>
      prevFilters.includes(clickedItemId)
        ? prevFilters.filter((filter) => filter !== clickedItemId)
        : [...prevFilters, clickedItemId]
    );
  };

  const removeFilter = (filterToRemove: string) => {
    setChoosenFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== filterToRemove)
    );
  };

  return (
    <div className="filter-container">
      <div className="FilterBar">
        <ul className="filter-nav-list">
          <li className="filter-btns">Filters</li>
          {alarms.map((alarm) => (
            <li key={alarm.name} className="filter-btns">
              <img src={alarm.symbol} alt="" />
              <p>{alarm.name}</p>
              <ul className="dropdown">
                {alarm.options.map((option) => (
                  <li key={option} className="filter-option">
                    <input
                      type="checkbox"
                      id={option}
                      onChange={handleChange}
                      checked={choosenFilters.includes(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <ul className="used-filter-container">
        {choosenFilters.map((filter) => (
          <li key={filter} className="used-filter">
            {filter}{" "}
            <button className="close-btn" onClick={() => removeFilter(filter)}>
              <img src="src/assets/close_small.svg" alt="x" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
