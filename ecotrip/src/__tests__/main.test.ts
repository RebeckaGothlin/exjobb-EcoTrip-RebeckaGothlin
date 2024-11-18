import { calculateDistance } from "../utils/distanceUtil";

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
