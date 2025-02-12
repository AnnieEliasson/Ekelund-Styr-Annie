import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import SearchSiteBar from "../SearchBar/SearchSiteBar/SearchSiteBar";
import "./Dashboard.scss";
import DashboardItem from "./DashboardItem/DashboardItem";
import { useProperties } from "../../context/PropertyContextProvider";
import FilterBarCompact from "../FilterBar/FilterBarCompact";
const Dashboard = () => {
  const { properties } = useProperties();
  const [searchResult, setSearchResult] = useState(properties);

  return (
    <>
      <div className="main-container">
        <div className="header">
          <FilterBar />
          <SearchSiteBar setSearchResult={setSearchResult} />
          <FilterBarCompact />
        </div>

        <div className="Dashboard">
          <DashboardItem searchResult={searchResult} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
