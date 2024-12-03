/*
Uträkningen kommer härifrån: https://www.movable-type.co.uk/scripts/latlong.html
*/

// Funktion som beräknar avståndet mellan två geografiska punkter (lat/lon) genom haversine-formeln:
export const calculateDistance = (
    lat1: number, // latitud för första punkten
    lon1: number, // longitud för första punkten
    lat2: number,
    lon2: number
) => {
    // konvertera grader till radians. 180 = pi radians. multiplicerar med pi/180
    const toRadians = (degree: number) => (degree * Math.PI) / 180;

    // jordens radie i kilometer (omvandlar vinklar till avstånd)
    const R = 6371;

    // skillnaden i latitud mellan de två punkterna (omvandlad till radians)
    const dLat = toRadians(lat2 - lat1);

    const dLon = toRadians(lon1 - lon2);

    // Haversine-formeln:
    // mellanberäkning som använder trigonometriska funktioner för att hantera klotets yta
    // Den tar hänsyn till både latitud- och longitudförändringar
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) + // Beräkning för latitudskillnaden
        Math.cos(toRadians(lat1)) * // Multipliceras med cosinus av den första latituden
        Math.cos(toRadians(lat2)) * // Mulitpliceras med cosinus av den andra latituden
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2); // Beräkning för longitudskillnaden

    // c är en annan mellanberäkning som använder arctangentfunktionen (atan2) för att beräkna den centrala vinkeln
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // avståndet i kilometer beräknas genom att multiplicera jordens radie med den centrala vinkeln (i radians)
    return R * c; // returnera avståndet i kilometer
};
