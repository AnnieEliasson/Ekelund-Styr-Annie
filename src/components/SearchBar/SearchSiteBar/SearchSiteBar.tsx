import { useState } from "react";
import "./SearchSiteBar.scss";
import { useProperties } from "../../../context/PropertyContextProvider";

type Props = {
  setSearchResult: any;
};

const SearchSiteBar = ({ setSearchResult }: Props) => {
  const { properties } = useProperties();
  const [input, setInput] = useState("");

  const filteredData = properties.filter(
    (item) =>
      item.streetAddress.toLowerCase().includes(input.toLowerCase()) ||
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.postalAddress.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <div className="SearchSiteBar-container">
        <input
          type="text"
          className="SearchSiteBar"
          placeholder="Search Site"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSearchResult(filteredData);
          }}
        />
        <span className="search-icon">&#x1F50E;&#xFE0E;</span>
      </div>
    </>
  );
};

export default SearchSiteBar;
