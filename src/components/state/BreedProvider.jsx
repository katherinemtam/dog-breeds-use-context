import React, {createContext, useContext, useEffect, useState} from 'react';
import { fetchCats } from '../../services/catApi';
import { fetchDogs } from '../../services/dogApi';

const BreedContext = createContext();

export const BreedProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchDogs().then(setBreeds);
  }, [])

  return(
    <BreedContext.Provider value = {{ breeds }}>
      {children}
    </BreedContext.Provider>
  );
};

export const useBreeds = () => {
  const { breeds } = useContext(BreedContext);
  return breeds;
}


export default BreedProvider;
