import axios from "axios";

// funktion för att hämta koordinater för en stad från PpenStreetMap
export const fetchCoordinates = async (city: string) => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
    );
    
    if (response.data.length === 0) {
        throw new Error('No coordinates found for the specified city');
    }

    // Destrukturerar latitud och longitud från svaret
    const { lat, lon } = response.data[0];
    // Returnerar latitud och longitud som flyttal
    return { lat: parseFloat(lat), lon: parseFloat(lon) };
};