import { fetchCityFromCoordinates, fetchCoordinates } from "../service/fetchCoordinates";
import { calculateDistance } from "../service/distanceUtil";
import { EmissionItem } from "../models/types";
import { Coordinates } from "./MapClickHandler";

export const calculateEmissions = async (
  from: string,
  to: string,
  fromCoords: Coordinates | null,
  toCoords: Coordinates | null
) => {
  const fromLocation = fromCoords || (await fetchCoordinates(from));
  const toLocation = toCoords || (await fetchCoordinates(to));

  if (fromLocation && toLocation) {
    const distance = calculateDistance(
      fromLocation.lat,
      fromLocation.lon,
      toLocation.lat,
      toLocation.lon
    );

    const data: EmissionItem[] = [
      { name: "Car", emissions: distance * 0.12 },
      { name: "Train", emissions: distance * 0.04 },
      { name: "Bus", emissions: distance * 0.07 },
      { name: "Plane", emissions: distance * 0.25 },
    ];

    return {
      data,
      distance,
      fromCity: await fetchCityFromCoordinates(
        fromLocation.lat,
        fromLocation.lon
      ),
      toCity: await fetchCityFromCoordinates(
        toLocation.lat,
        toLocation.lon
      ),
    };
  } else {
    throw new Error("Invalid coordinates");
  }
};
