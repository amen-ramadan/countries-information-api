// CountryContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

export interface Country {
  flag: string;
  name: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: {name: string}[];
  languages: {name: string}[];
  borders: string[];
  population: number;
  region: string;
  capital: string;
}

interface CountryContextType {
  countries: Country[];
  loading: boolean;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading countries data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <CountryContext.Provider value={{ countries, loading }}>
      {children}
    </CountryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCountryContext = () => {
  const context = React.useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};
