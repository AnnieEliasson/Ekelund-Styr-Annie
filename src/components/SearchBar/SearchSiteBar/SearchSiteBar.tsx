import { useState } from "react";
import "./SearchSiteBar.scss";
import { useProperties } from "../../../context/PropertyContextProvider";

type Props = {
  setSearchResult: (results: any) => void;
};

const SearchSiteBar = ({ setSearchResult }: Props) => {
  const { properties } = useProperties();
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setInput(searchValue);

    const filteredData = properties.filter(
      (item) =>
        item.streetAddress.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.postalAddress.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResult(filteredData);
  };

  return (
    <div className="SearchSiteBar-container">
      <input
        type="text"
        className="SearchSiteBar"
        placeholder="Search Site"
        value={input}
        onChange={handleInputChange}
      />
      <span className="search-icon">&#x1F50E;&#xFE0E;</span>
    </div>
  );
};

export default SearchSiteBar;
