import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Location } from '@/Interfaces/location';

// Define the shape of the context
interface LocationContextType {
  selectedOption: Location | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<Location | null>>;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState<Location | null>(null);

  return (
    <LocationContext.Provider value={{ selectedOption, setSelectedOption }}>
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
