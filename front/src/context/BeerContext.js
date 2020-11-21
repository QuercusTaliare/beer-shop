import { createContext, useState } from 'react';

export const BeerContext = createContext();

export const BeerContextProvider = ({ children }) => {

  const [beers, setBeers] = useState([]);

  return (
    <BeerContext.Provider value={[beers, setBeers]}>
      {children}
    </BeerContext.Provider>
  )

}
