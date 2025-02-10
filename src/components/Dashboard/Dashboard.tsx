import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import SearchSiteBar from "../SearchBar/SearchSiteBar/SearchSiteBar";
import "./Dashboard.scss";
import DashboardItem from "./DashboardItem";
import { useProperties } from "../../context/PropertyContextProvider";
const Dashboard = () => {
  const { properties } = useProperties();
  const [searchResult, setSearchResult] = useState(properties);

  return (
    <>
      <div className="header">
        <FilterBar />
        <SearchSiteBar setSearchResult={setSearchResult} />
      </div>

      <div className="Dashboard">
        <DashboardItem searchResult={searchResult} />
      </div>
    </>
  );
};

export default Dashboard;
