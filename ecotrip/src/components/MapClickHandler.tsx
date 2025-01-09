import { useState } from "react";
import { useMapEvents } from "react-leaflet";

export interface Coordinates {
  lat: number;
  lon: number;
}

/**
 * A React component that handles map click events to select two points (from and to).
 * 
 * @param {Object} props - The component props.
 * @param {(coords: Coordinates) => void} props.setFromPoint - Function to set the starting point coordinates.
 * @param {(coords: Coordinates) => void} props.setToPoint - Function to set the destination point coordinates.
 * @returns {null} - This component does not render anything; it only handles map interactions.
 */
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