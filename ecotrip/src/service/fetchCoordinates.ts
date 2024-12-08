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

export const fetchCityFromCoordinates = async (lat: number, lon: number) => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );

    if (!response.data || !response.data.address) {
        throw new Error("No city found for the specified coordinates");
    }

    // Försök att hämta stadens namn från "address"-objektet, annars står det unknown location
    return response.data.address.city || 
           response.data.address.town || 
           response.data.address.village || 
           response.data.address.hamlet ||
           "Unknown location";
};
