import axios from "axios";
import { calculateDistance } from "../service/distanceUtil";
import { fetchCoordinates } from "../service/fetchCoordinates";

test('calculateDistance calculate the correct distance between two points', () => {
    // Stockholm
    const lat1 = 59.3293; 
    const lon1 = 18.0686;
    // Göteborg
    const lat2 = 57.7089;
    const lon2 = 11.9746;

    const distance = calculateDistance(lat1, lon1, lat2, lon2);

    // Förväntade anvståndet mellan stockholm och göteborg är 397km (1 km tolerans)
    expect(distance).toBeCloseTo(397, 0);
})

jest.mock('axios');

describe('fetchCoordinates', () => {
    it('should fetch and return correct coordinates for a given city', async () => {
        // Mockat svar från OpenStreetMap
        const mockResponse = {
            data: [
                {
                    lat: '59.3293',
                    lon: '18.0686',
                },
            ],
        };

        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        const city = 'Stockholm';
        const result = await fetchCoordinates(city);

        expect(result).toEqual({ lat: 59.3293, lon: 18.0686 });
        expect(axios.get).toHaveBeenCalledWith(
            `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
        );
    });

    it('should throw an error if the response is empty', async () => {
        // Mockar ett tomt svar
        const mockResponse = { data: [] };
        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        const city = 'UnknownCity';

        // Förväntar sig att funktionen "kastar ett fel"
        await expect(fetchCoordinates(city)).rejects.toThrow(
            'No coordinates found for the specified city'
        );
    });
});
