import { createContext, useContext, useState, ReactNode } from "react";
import { properties as initialProperties } from "../testData";

export type Property = {
  name: string;
  streetAddress: string;
  postalAddress: string;
  technicalAlarms: number;
  operationalAlarms: number;
  safetyAlarms: number;
  newAlarms: number;
  latitude: number;
  longitude: number;
};

type PropertiesContextType = {
  properties: Property[];
  setProperties: (properties: Property[]) => void;
  selected: Property | null;
  setSelected: (selected: Property | null) => void;
};

const PropertiesContext = createContext<PropertiesContextType | undefined>(
  undefined
);

export const PropertiesProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [selected, setSelected] = useState<Property | null>(
    initialProperties.length > 0 ? initialProperties[0] : null
  );

  return (
    <PropertiesContext.Provider
      value={{ properties, setProperties, selected, setSelected }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error("useProperties must be used within a PropertiesProvider");
  }
  return context;
};
