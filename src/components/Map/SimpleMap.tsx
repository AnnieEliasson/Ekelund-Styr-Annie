import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CustomMarker from "./CustomMarker";
import HouseIcon from "../Dashboard/HouseIcon/HouseIcon";
import { useProperties } from "../../context/PropertyContextProvider";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = 57.62063280878027;
  const longitude = 12.941242984006827;

  const mapStyle = [
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  ];

  const { properties } = useProperties();

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      ref={mapRef}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url={mapStyle[2]}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />

      {properties.map((property) => {
        return (
          <CustomMarker
            key={property.name}
            position={[property.latitude, property.longitude]}
          >
            <HouseIcon item={property} mapMarker={true} />
          </CustomMarker>
        );
      })}
    </MapContainer>
  );
};

export default SimpleMap;
