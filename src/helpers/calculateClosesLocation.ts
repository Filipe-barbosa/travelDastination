
import { Location } from '@/Interfaces/location';
const toRadians = (deg: number) => (deg * Math.PI) / 180;

const haversineDistance = (coord1: Location, coord2: Location) => {
  const R = 6371;
  const lat1 = toRadians(coord1.latitude);
  const lon1 = toRadians(coord1.longitude);
  const lat2 = toRadians(coord2.latitude);
  const lon2 = toRadians(coord2.longitude);

  const dlat = lat2 - lat1;
  const dlon = lon2 - lon1;

  const a =
    Math.sin(dlat / 2) * Math.sin(dlat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) * Math.sin(dlon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};
 
 export const calculateClosestLocations = (
  selectedLocation: Location,
  locations: Location[],
  count: number
): (Location & { distance: number })[] => {
  const distances = locations
    .filter(location => location.id !== selectedLocation.id)
    .map(location => ({
      ...location,
      distance: haversineDistance(selectedLocation, location),
    }));

  const closest = distances.sort((a, b) => a.distance - b.distance).slice(0, count);

  return closest;
};


