import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <>
      <div className="SearchBar-container">
        <input type="text" className="SearchBar" placeholder="Search Alarm" />
        <span className="search-icon">&#x1F50E;&#xFE0E;</span>
      </div>
    </>
  );
};

export default SearchBar;
