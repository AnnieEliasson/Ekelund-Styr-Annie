import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import SearchSiteBar from "../SearchBar/SearchSiteBar/SearchSiteBar";
import "./Dashboard.scss";
import DashboardItem from "./DashboardItem/DashboardItem";
import { useProperties } from "../../context/PropertyContextProvider";
import FilterBarCompact from "../FilterBar/FilterBarCompact";
import SimpleMap from "../Map/SimpleMap";
const Dashboard = () => {
  const { properties } = useProperties();
  const [searchResult, setSearchResult] = useState(properties);
  const [mapView, setMapView] = useState(true);

  /*   if (mapView) {
    const header = document.querySelector(".header") as HTMLElement;
    header.style.backgroundColor = "rgba(0, 0, 0, 0.315)";
  } else {
    const header = document.querySelector(".header") as HTMLElement;
    header.style.backgroundColor = "rgba(89, 152, 189, 0.301)";
  } */

  return (
    <>
      <div className="main-container">
        <button className="view-btn" onClick={() => setMapView(!mapView)}>
          Grid View
        </button>
        <div className="header">
          <FilterBar />
          <SearchSiteBar setSearchResult={setSearchResult} />
          <FilterBarCompact />
        </div>
        {mapView ? (
          <div className="MapContainer">
            <SimpleMap />
          </div>
        ) : (
          <div className="Dashboard">
            <DashboardItem searchResult={searchResult} />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
