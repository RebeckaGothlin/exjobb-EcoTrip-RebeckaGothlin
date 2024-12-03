import { useState } from "react";
import { useMapEvents } from "react-leaflet";

export interface Coordinates {
  lat: number;
  lon: number;
}

export const MapClickHandler = ({
  setFromPoint,
  setToPoint,
}: {
  setFromPoint: (coords: Coordinates) => void;
  setToPoint: (coords: Coordinates) => void;
}) => {
  const [isFrom, setIsFrom] = useState(true);

  useMapEvents({
    click(e) {
      const point = { lat: e.latlng.lat, lon: e.latlng.lng };
      if (isFrom) {
        setFromPoint(point);
        setIsFrom(false);
      } else {
        setToPoint(point);
        setIsFrom(true);
      }
    },
  });

  return null;
};