/**
 * Calculates the distance between two geographical points (latitude and longitude) using the haversine formula.
 * 
 * The calculation is based on this reference: https://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {number} lat1 - Latitude of the first point.
 * @param {number} lon1 - Longitude of the first point.
 * @param {number} lat2 - Latitude of the second point.
 * @param {number} lon2 - Longitude of the second point.
 * @returns {number} - The distance between the two points in kilometers.
 */
export const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) => {
    // Converts degrees to radians. (180 degrees = π radians). Multiply by π/180
    const toRadians = (degree: number) => (degree * Math.PI) / 180;

    // Earth's radius in kilometers (used to convert angles to distances)
    const R = 6371;

    // The difference in latitude between the two points (converted to radians)
    const dLat = toRadians(lat2 - lat1);

    // The difference in longitude between the two points (converted to radians)
    const dLon = toRadians(lon1 - lon2);

    // Haversine formula:
    // Intermediate calculation using trigonometric functions to account for the curvature of the Earth.
    // It considers both latitude and longitude changes.
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) + // Calculation for the latitude difference
        Math.cos(toRadians(lat1)) * // Multiplied by the cosine of the first latitude
        Math.cos(toRadians(lat2)) * // Multiplied by the cosine of the second latitude
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2); // Calculation for the longitude difference

    // `c` is another intermediate calculation using the arctangent function (atan2)
    // It calculates the central angle between the points.
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // The distance in kilometers is calculated by multiplying the Earth's radius by the central angle (in radians).
    return R * c; // Return the distance in kilometers
};
