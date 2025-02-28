import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Marker } from "react-leaflet";
import L from "leaflet";

type Props = {
  position: any;
  children: any;
};

const CustomMarker = ({ position, children }: Props) => {
  const markerRef = useRef(null);
  const containerRef = useRef(document.createElement("div"));

  useEffect(() => {
    const marker: any = markerRef.current;
    if (marker) {
      const icon = L.divIcon({
        className: "custom-marker",
        html: containerRef.current, // Här injicerar vi en riktig React-komponent!
        iconSize: [50, 50], // Anpassa storleken
        iconAnchor: [25, 50], // Förankring
        popupAnchor: [0, -50],
      });

      marker.setIcon(icon);
    }
  }, []);

  return (
    <>
      <Marker position={position} ref={markerRef} />
      {createPortal(children, containerRef.current)}
    </>
  );
};

export default CustomMarker;
