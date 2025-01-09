import axios from "axios";

/**
 * Fetches the coordinates (latitude and longitude) for a given city using OpenStreetMap.
 *
 * @param {string} city - The name of the city to fetch coordinates for.
 * @returns {Promise<{ lat: number, lon: number }>} - A promise that resolves to an object containing:
 *   - `lat`: The latitude of the city.
 *   - `lon`: The longitude of the city.
 * @throws {Error} - Throws an error if no coordinates are found for the specified city.
 */
export const fetchCoordinates = async (city: string) => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
    );
    
    if (response.data.length === 0) {
        throw new Error('No coordinates found for the specified city');
    }

    // Destructure latitude and longitude from the response
    const { lat, lon } = response.data[0];
    // Return latitude and longitude as floats
    return { lat: parseFloat(lat), lon: parseFloat(lon) };
};

export const fetchCityFromCoordinates = async (lat: number, lon: number) => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );

    if (!response.data || !response.data.address) {
        throw new Error("No city found for the specified coordinates");
    }

    // Attempt to retrieve the city name from the "address" object, or fallback to "unknown location"
    return response.data.address.city || 
           response.data.address.town || 
           response.data.address.village || 
           response.data.address.hamlet ||
           "Unknown location";
};
