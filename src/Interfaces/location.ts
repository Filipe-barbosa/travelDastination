
 export interface Location {
  id: number;
  name: string;
  description: string;
  country: string;
  climate: string;
  currency: string;
  latitude: number;
  longitude: number;
}


export type LocationType = 'search' | 'button'