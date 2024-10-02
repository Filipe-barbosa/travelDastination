import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Location, LocationType } from '@/Interfaces/location';
import { calculateClosestLocations } from '@/helpers/calculateClosesLocation';
import options from '../../src/Components/SearchContainer/options.json';

interface LocationContextType {
  selectedOption: Location | null;
  buttonOption: Location | null;
  allOptions: Location[];
  closestLocations: (Location & { distance: number })[] | null;
  handleSelectedOptionChange: (location: Location, type: LocationType) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState<Location | null>(null);
  const allOptions: Location[] = options;
  const [buttonOption, setButtonOption] = useState<Location | null>(null);
  const [closestLocations, setClosestLocations] = useState<
    (Location & { distance: number })[] | null
  >(null);

  const handleSelectedOptionChange = (
    location: Location,
    type: LocationType,
  ) => {
    type === 'search'
      ? (setSelectedOption(location), setButtonOption(null))
      : setButtonOption(location);

    const allLocations: Location[] = options;
    const closest = calculateClosestLocations(location, allLocations, 4);
    setClosestLocations(closest);
  };

  return (
    <LocationContext.Provider
      value={{
        selectedOption,
        allOptions,
        handleSelectedOptionChange,
        buttonOption,
        closestLocations,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      'useLocationContext must be used within a LocationProvider',
    );
  }
  return context;
};
